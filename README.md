
# Installation

Simply clone this repo and run `npm install` (you'll need NodeJS and npm). After
it's done, you can start the server by running the `start` script.

```
npm start
```

The server will then be available at `http://localhost:3000`.

# API

While the development server is running, there will be a simple basic REST api
with two endpoints:

* `/api/files/reads` returns the file read events
* `/api/files/writes` returns the file write events

These endpoints simulate some network variability by using a 1 - 2000 ms delay.
They also simulate a 5% chance to throw an http 500 error "something went wrong".

## Format specification

`{file_reads | file_writes}`
**Type:** list of files (see below)
A list of files read or written by the analysis subject

- `filename`
  - **Type:** String
  - **Example:** `"desktop.ini"`
  - **Description:** A file name. Could be an absolute or relative path
- `abs_path` (optional)
  - **Type:** String
  - **Example:** `"C:\Users\desktop.ini"`
  - **Description:** An absolute path to the file
- `ext_info` (optional)
  - **Type:** File-Info (see next section)
  - **Description:** Static file information
- `file_attributes` (optional)
  - **Type:** String[]
  - **Example:** `"FILE_ATTRIBUTE_ARCHIVE", "FILE_ATTRIBUTE_HIDDEN"`
  - **Description:** Attributes of the file
- `iostatus` (optional)
  - **Type:** String[]
  - **Example:** `"FILE_CREATED", "FILE_OPENED"`
  - **Description:** Completion status of the file operation

### Static file information

The analysis engine extracts static file information for most files manipulated
during the analysis run and associates it with all files in the report.

- `md5` (optional)
  - **Type:** Hexadecimal String
  - **Example:** `"33474600f048db4059171231d54279eb"`
  - **Description:** The MD5 hash of a file content
- `sha1` (optional)
  - **Type:** Hexadecimal string
  - **Example:** `"592897dab63847d349699fb51c33dc449052c6f8"`
  - **Description:** The SHA1 hash of the file content
- `file_info` (optional)
  - **Type:** String
  - **Example:** `"MS Windows shortcut"`
  - **Description:** A text description of the file type
- `size` (optional)
  - **Type:** Integer
  - **Example:** `1233`
  - **Description:** The file size in bytes

## References

* [Jasmine 2.8](https://jasmine.github.io/2.8/introduction)
* [AngularJS 1.7 Developer Guide](https://docs.angularjs.org/guide)
* [AngularJS 1.7 Unit Testing](https://docs.angularjs.org/guide/unit-testing)
* [Todd Motto AngularJS Style Guide for Teams](https://github.com/toddmotto/angularjs-styleguide)
* [Bootstrap 4](http://getbootstrap.com/)
* [Webpack](https://webpack.js.org/concepts/)
* [Karma](https://karma-runner.github.io/0.8/index.html)
* [ui.router](https://ui-router.github.io/ng1/docs/latest/)
