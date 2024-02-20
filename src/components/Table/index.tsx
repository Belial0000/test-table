import React, { useState, ChangeEvent, useRef } from "react";
import "./styles.css";

interface DataRow {
  [key: string]: any;
}

interface DataTableProps {
  data: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [sortedData, setSortedData] = useState<DataRow[]>(data);
  const [ascendingOrder, setAscendingOrder] = useState<boolean>(true);
  const [editedData, setEditedData] = useState<DataRow | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const aValue = getValueToSort(a);
      const bValue = getValueToSort(b);
      return ascendingOrder
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
    setSortedData(sorted);
    setAscendingOrder(!ascendingOrder);
  };
  const getValueToSort = (item: DataRow): string => {
    const keys = Object.keys(item);
    // Проверяем, есть ли поле после id
    if (keys.length > 1) {
      // Проверяем, является ли следующее поле строкой
      const nextKey = keys[1];
      if (typeof item[nextKey] === "string") {
        return item[nextKey];
      }
    }
    // Если нет подходящего поля, возвращаем пустую строку
    return "";
  };
  function isDate(value: any): boolean {
    // Проверяем, является ли значение строкой
    if (typeof value === "string") {
      // Пытаемся создать объект Date из строки
      const date = new Date(value);
      // Проверяем, является ли результат объектом Date и не является ли он NaN
      return !isNaN(date.getTime());
    }
    // Если значение не является строкой, возвращаем false
    return false;
  }
  const openEditModal = (rowData: DataRow) => {
    setEditedData(rowData);
    setIsModalOpen(true);
  };
  const handleSave = () => {
    // Обновление данных после редактирования
    const updatedData = sortedData.map((item) =>
      item.id === editedData?.id ? { ...item, ...editedData } : item
    );
    setSortedData(updatedData);
    setIsModalOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const [originalData] = useState<DataRow[]>(data);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredData = sortedData.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(searchTerm)
      )
    );
    setSortedData(filteredData);
  };

  const resetSearch = () => {
    setSearchTerm("");
    setSortedData(originalData);
  };
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="table">
      <div className="table-container">
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <button className="reset-button" onClick={resetSearch}>
            Reset
          </button>
        </div>
        <button className="sort-button" onClick={handleSort}>
          Sort by Name
        </button>
        <table>
          <thead>
            <tr>
              {sortedData.length > 0 &&
                Object.keys(sortedData[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key, index) => (
                  <td key={index}>
                    {key === "active" && typeof item[key] === "boolean" ? (
                      item[key] ? (
                        <span className="active">Active</span>
                      ) : (
                        <span className="inactive">Inactive</span>
                      )
                    ) : typeof item[key] === "object" ? (
                      Object.entries(item[key]).map(
                        ([subKey, subValue], subIndex) => (
                          <div key={subIndex}>
                            <strong>{subKey}: </strong>
                            {typeof subValue === "string" ||
                            typeof subValue === "number"
                              ? subValue
                              : String(subValue)}
                          </div>
                        )
                      )
                    ) : isDate(item[key]) ? (
                      // Если значение является датой, выводим ее в читаемом формате
                      new Date(item[key]).toLocaleString()
                    ) : (
                      // В противном случае выводим значение как есть
                      item[key]
                    )}
                  </td>
                ))}
                <td className="edit-container">
                  <button
                    className="edit-button"
                    onClick={() => openEditModal(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" ref={modalRef}>
              <h2>Edit</h2>
              {editedData && (
                <div>
                  {Object.keys(editedData).map(
                    (key, index) =>
                      index === 1 && (
                        <div key={index}>
                          <label htmlFor={key}>{key}</label>
                          <input
                            type="text"
                            id={key}
                            name={key}
                            value={editedData[key]}
                            onChange={handleInputChange}
                          />
                        </div>
                      )
                  )}
                  <button onClick={handleSave}>Save</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
