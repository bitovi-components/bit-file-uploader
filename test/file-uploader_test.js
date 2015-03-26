import $ from 'jquery';
import can from 'can';
import QUnit from 'steal-qunit';
import 'can/view/stache/';

import ViewModel from 'file-uploader';
//Steal has finished loading at this point so we just need to make sure Testee is ready

var vm, template, $component;

QUnit.module('bit-file-uploader view model', {
	beforeEach: function () {
		vm = new ViewModel({});
	}
});

QUnit.test('basics', function () {
	
	equal( can.isEmptyObject( vm.attr() ), false, 'ViewModel has properties.');
	equal( vm.attr('files').length, 0, 'Files storage is empty.' );
	equal( vm.attr('filesCount'), 0, 'No files exist yet.' );
	equal( vm.attr('fileTypes').length, 0, 'No file types exist yet.' );
	equal( vm.attr('fileTypeList'), '', 'No file types exist and return empty string.' );
	equal( vm.attr('isMultiple'), false, 'isMultiple defaults to false.' );
	equal( vm.attr('isReady'), false, 'isReady defaults to false.' );
	equal( vm.attr('fileUploadId').indexOf('fileupload'), 0, 'Default control ID startes with file upload.' );
	equal( vm.attr('isReady'), false, 'isReady defaults to false.' );
});

QUnit.test('Add a file', function () {
	equal( vm.attr('isReady'), false, 'File control is waiting.' );
	//add file
    var fakeFile = { name:'myfile', type:'text/csv' };
	vm.addFile(fakeFile);
	
	equal( vm.attr('files').length, 1, 'File added to storage.' );
	equal( vm.attr('filesCount'), 1, 'File count increments.' );
	equal( vm.attr('isReady'), true, 'File control is ready.' );
});

QUnit.module('bit-file-uploader component',{
	beforeEach: function () {
		template = can.stache('<bit-file-uploader></bit-file-uploader>');
		$('#qunit-fixture').append(template({}));
		$component = $('bit-file-uploader',$('#qunit-fixture') );
		vm = can.viewModel($component);
	}
});

QUnit.test('renders', function () {
	equal($component.length, 1, 'Component rendered');
	equal($component.find('.file-upload-container').is(':visible'),true, 'Container is visible.');
	equal($component.find('.file-upload').is(':visible'), true, 'File upload field is visible.');
});

QUnit.test('renders file types', function () {
	var fileTypes = ['text/csv', 'image/jpg'];
	vm.attr('fileTypes', fileTypes);
	
	equal($component.find('.file-upload-types').is(':visible'), true, 'File upload types field is visible.');
	equal($component.find('.file-upload-types').text(), 'text/csv, image/jpg', 'File upload types field is visible.');
});
