import React from "react";
import { useParams } from "react-router-dom";
import DataTable from "./components/Table";

const DataTablePage: React.FC = () => {
  const { dataType } = useParams<{ dataType: string }>();
  let data: any[] = [];
  switch (dataType) {
    case "products":
      data = [
        {
          id: 14381328,

          name: "id quis voluptate nostrud",

          options: {
            size: "XL",

            amount: 100,
          },

          active: true,

          createdAt: "1985-08-09T02:10:18.0Z",
        },

        {
          id: 26785188,

          name: "esse elit",

          options: {
            size: "S",

            amount: 10,
          },

          active: true,

          createdAt: "1956-03-20T08:59:40.0Z",
        },

        {
          id: 63878634,

          name: "enim",

          options: {
            size: "L",

            amount: 20,
          },

          active: false,

          createdAt: "2016-07-27T16:05:57.0Z",
        },

        {
          id: 79901249,

          name: "eu ad",

          options: {
            size: "XXL",

            amount: 1000,
          },

          active: true,

          createdAt: "1988-08-20T03:53:24.0Z",
        },

        {
          id: 53113051,

          name: "proident ipsum",

          options: {
            size: "XL",

            amount: 4,
          },

          active: true,

          createdAt: "2003-01-19T20:09:29.0Z",
        },

        {
          id: 49132779,

          name: "aliqua adipisicing",

          options: {
            size: "S",

            amount: 22,
          },

          active: false,

          createdAt: "2003-06-14T02:44:44.0Z",
        },

        {
          id: 12135250,

          name: "dolor non in sunt",

          options: {
            size: "M",

            amount: 11,
          },

          active: true,

          createdAt: "2000-08-04T19:49:04.0Z",
        },

        {
          id: 47196404,

          name: "dolor culpa in cupidatat",

          options: {
            size: "S",

            amount: 1,
          },

          active: false,

          createdAt: "2003-11-15T23:56:45.0Z",
        },

        {
          id: 5112903,

          name: "sunt amet do eu ipsum",

          options: {
            size: "L",

            amount: 10,
          },

          active: false,

          createdAt: "1968-09-24T22:07:21.0Z",
        },

        {
          id: 32497729,

          name: "eiusmod",

          options: {
            size: "XXL",

            amount: 0,
          },

          active: true,

          createdAt: "2012-09-24T01:42:32.0Z",
        },
      ];
      break;
    case "priceplans":
      data = [
        {
          id: 13334466,
          description: "aute fugiat commodo id",
          active: false,
          createdAt: "1949-06-21T14:03:32.0Z",
          removedAt: "1960-09-22T13:43:32.0Z",
        },
        {
          id: 38738895,
          description: "esse dolore cillum anim",
          active: false,
          createdAt: "2014-09-09T02:06:07.0Z",
          removedAt: "2006-06-14T18:43:22.0Z",
        },
        {
          id: 69423742,
          description: "ullamco quis aliquip laborum",
          active: false,
          createdAt: "1982-10-18T01:51:07.0Z",
          removedAt: "1978-03-15T11:19:21.0Z",
        },
        {
          id: 78413703,
          description: "nulla elit anim mollit occaecat",
          active: false,
          createdAt: "1959-07-30T18:57:54.0Z",
          removedAt: "1980-01-31T01:46:32.0Z",
        },
        {
          id: 51092826,
          description: "pariatur elit voluptate",
          active: false,
          createdAt: "1976-09-08T02:38:21.0Z",
          removedAt: "1995-06-28T23:17:24.0Z",
        },
        {
          id: 92933022,
          description: "ad cillum proident",
          active: true,
          createdAt: "1975-02-06T15:44:29.0Z",
          removedAt: "1970-05-24T23:08:27.0Z",
        },
        {
          id: 54507439,
          description: "nisi eiusmod",
          active: true,
          createdAt: "1960-07-01T06:17:05.0Z",
          removedAt: "1993-01-08T23:40:57.0Z",
        },
        {
          id: 39230580,
          description: "do in elit sit dolor",
          active: true,
          createdAt: "1984-10-02T14:32:01.0Z",
          removedAt: "1985-09-30T09:48:12.0Z",
        },
        {
          id: 99000859,
          description: "reprehenderit exercitation Duis non",
          active: false,
          createdAt: "1977-07-05T09:58:14.0Z",
          removedAt: "1991-07-12T09:30:12.0Z",
        },
        {
          id: 74826040,
          description: "dolor ullamco fugiat incididunt in",
          active: false,
          createdAt: "2004-12-10T22:13:28.0Z",
          removedAt: "2021-09-09T11:21:13.0Z",
        },
      ];
      break;
    case "pages":
      data = [
        {
          id: 23634610,
          title: "aliquip sit proident veniam tempor",
          active: false,
          updatedAt: "1948-04-09T10:15:44.0Z",
          publishedAt: "1956-09-25T20:13:19.0Z",
        },
        {
          id: 67303872,
          title: "dolor pariatur et ipsum fugiat",
          active: false,
          updatedAt: "2021-10-23T04:51:35.0Z",
          publishedAt: "1987-02-20T02:45:15.0Z",
        },
        {
          id: 49117143,
          title: "amet ut cillum tempor",
          active: false,
          updatedAt: "2007-04-09T13:18:03.0Z",
          publishedAt: "1955-07-01T17:29:49.0Z",
        },
        {
          id: 57694553,
          title: "sed sint quis",
          active: false,
          updatedAt: "1995-11-26T08:12:19.0Z",
          publishedAt: "1955-01-16T01:02:51.0Z",
        },
        {
          id: 52130295,
          title: "consectetur officia ullamco",
          active: false,
          updatedAt: "1988-10-05T04:13:21.0Z",
          publishedAt: "1982-03-19T19:19:49.0Z",
        },
        {
          id: 87091875,
          title: "occaecat et proident",
          active: true,
          updatedAt: "2000-05-25T16:49:30.0Z",
          publishedAt: "2018-04-18T20:33:59.0Z",
        },
        {
          id: 38008840,
          title: "laboris",
          active: true,
          updatedAt: "1959-09-18T09:16:21.0Z",
          publishedAt: "2001-07-12T09:30:50.0Z",
        },
        {
          id: 62296414,
          title: "esse minim laboris",
          active: false,
          updatedAt: "2021-09-09T22:06:01.0Z",
          publishedAt: "1989-10-06T07:25:18.0Z",
        },
        {
          id: 76976188,
          title: "id cupidatat fugiat tempor",
          active: false,
          updatedAt: "1949-05-06T18:01:58.0Z",
          publishedAt: "1991-09-01T02:29:58.0Z",
        },
        {
          id: 22666349,
          title: "minim est",
          active: true,
          updatedAt: "1985-04-15T01:04:37.0Z",
          publishedAt: "1998-12-12T14:02:25.0Z",
        },
      ];
      break;
    default:
      break;
  }
  console.log(data);

  return (
    <div>
      <h2>Table for '{dataType}' data</h2>
      <DataTable data={data} />
    </div>
  );
};

export default DataTablePage;
