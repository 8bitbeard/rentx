import { Connection, createConnection, getConnectionOptions } from "typeorm";

// interface IOptions {
//   host: string;
//   port: number;
// }

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = "database";
//   newOptions.port = 5432;
//   createConnection({
//     ...options,
//   });
// });

// export default async (host = "database", port = 5432): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();

//   return createConnection(
//     Object.assign(defaultOptions, {
//       host: process.env.NODE_ENV === "test" ? "localhost" : host,
//       port: process.env.NODE_ENV === "test" ? 5105 : port,
//       database:
//         process.env.NODE_ENV === "test"
//           ? "rentx_testing"
//           : defaultOptions.database,
//     })
//   );
// };

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === "test"
          ? "rentx_testing"
          : defaultOptions.database,
    })
  );
};
