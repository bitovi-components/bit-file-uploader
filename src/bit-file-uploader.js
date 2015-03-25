/**
 * @module {can.Component} file-uploader File Uploader
 * @parent file-uploader
 * @author Juan Orozco
 *
 *
 * @description
 * File Upload creates a file upload control and manages the files for use with XML HTTP request.
 *
 *
 * @signature '<bit-file-uploader></bit-file-uploader>'
 *
 * @param {can.List} files A storage container for added files.
 * @param {can.List} fileTypes Whitelist of file types.
 * @param {FormData} formData A [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object with all files appended to it.
 * @param {boolean} isMultiple Flag for setting control to multiple mode.
 * @param {string} fileUploadId Used as the ID of the file upload component. A random ID is generated if not provided.
 *
 *
 * @body
 *
 * ## Component Initialization
 *
 * Using the components file handling requires passing an array/can.List to the component.
 * ```html
 *   <bit-file-uploader files="{files}"></bit-file-uploader>
 * ```
 *
 * Add the other values if needed.
 * ```html
 *   <bit-file-uploader is-multiple="true" file-types="{fileTypes}" files="{files}"></bit-file-uploader>
 * ```
 *
 * @demo index.html
 */
import can from 'can';
import 'can/view/stache/';
import template from './file-uploader.stache!';
import './file-uploader.less!';

import ViewModel from './viewmodel';

can.Component.extend({
	tag: 'bit-file-uploader',
	template: template,
	viewModel: ViewModel,
    events:{
        /**
		 * @function file-uploader.fileInputChangeEvent File Input Change Event Handler
         * @description Adds files to the local object.
         * @param {selector} $el The input control that triggered the event.
         */
        '.file-upload change':function( $el ){
            var files = $el.prop('files'),
                vm = this.scope;

            can.each(files, function (file) {
                vm.addFile(file);
            });
        }
    }
});

export default ViewModel;
