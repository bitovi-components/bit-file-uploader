import $ from 'jquery';
import can from 'can';
import QUnit from 'qunitjs';
import 'can/view/stache/';

import ViewModel from 'bit-file-uploader';
//Steal has finished loading at this point so we just need to make sure Testee is ready
QUnit.config.autorun = false;
if (window.Testee) {
	Testee.init();
}

var vm, template, $component;

QUnit.module('bit-file-uploader view model');

QUnit.test('basics', function(){
	vm = new ViewModel({});
	
	equal( can.isEmptyObject( vm.attr() ), false, 'ViewModel has properties.');
	equal( vm.attr('filesCount'), 0, 'Files length is 0.' );
});

QUnit.module('bit-file-uploader component',{
	beforeEach: function () {
		template = can.stache('<bit-file-uploader></bit-file-uploader>');
		$('#qunit-fixture').append(template({}));
		$component = $('bit-file-uploader',$('#qunit-fixture') );
		vm = $component.data('scope');
	}
});

QUnit.test('renders', function () {
	equal($component.length, 1, 'Component rendered');
});


//Load Qunit
QUnit.load();
