<!--
@page file-uploader File Uploader

-->
# File Uploader

File Upload creates a file upload control and manages the files for use with XML HTTP request.  Using the FormData browser object, File Uploader adds files to the object to be passed to a compatible service using XMLHTTPRequests. The file uploader control is still accessible through the DOM by passing `file-upload-id` to the component during instantiation, if the FileData object is not needed.

## Usage

There are three builds within the `dist` folder, "amd", "cjs", and "global". Use whichever is necessary using your method of choice.

Once the js file is loaded, adding `<bit-file-upload></bit-file-upload>` to your template will add a file-upload component with full functionality. 

`bit-file-upload` does not require any options, but if the FormData ability is desired, it requires a live-bound object set to `fileData`. 

## Dependancies

The only dependency is CanJS. Verify the FormData object works properly in implemented browsers before using.

## Grunt

There are three simple tasks in the Gruntfile, `server`, `build`, `docs` and `test`.

- Server: Runs a simple server. Can run the test file manually and review the component's demo file (index.html).
- Build: Builds the component distributions.
- Docs: Runs DocumentJS to build documentation.
- Test: Runs the QUnit tests for the component.
