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
	viewModel: ViewModel
});

export default ViewModel;
