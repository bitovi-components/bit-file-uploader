/**
 * @module {can.Component} file-uploader File Uploader
 * @parent components
 * @author Juan Orozco
 *
 *
 * @description
 * 
 *
 *
 * @signature '<bit-file-uploader></bit-file-uploader>'
 *
 * @param {can.List} fileTypes Whitelist of file types.
 *
 *
 * @body
 *
 * ## Component Initialization
 *
 * ```html
 *   <bit-file-uploader></bit-file-uploader>
 * ```
 *
 * Add the ??????? values if needed.
 * ```html
 *   <bit-file-uploader></bit-file-uploader>
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
		 * @function 
         * @description Adds files to the local object.
         * @param {Object} options The Stache helper options object.
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
