/**
 * @module {can.Map} file-uploader/ViewModel View Model
 * @parent file-uploader
 * @author Juan Orozco
 *
 * @description View model of the [file-uploader] component.
 *
 * @signature
 * var ViewModel = can.Map.extend({});
 *
 */
import can from 'can';
import 'can/map/define/';

export default can.Map.extend({
    define:{
        
        /**
         * @function file-uploader.scope.filesCount filesCount
         * @description The current number of selected files.
         * @return {Number} Returns the length of the files array.
         */
        filesCount: {
            type: 'number',
            get: function(){
                return this.attr('files').length;
            }
        },
        
        /**
         * @function file-uploader.scope.fileTypeList fileTypeList
         * @description Stringifys the valid file type array.
         * @return {String} A comma separate list of file types.
         */
        fileTypeList: {
            get: function(){
                var fileTypes = this.attr('fileTypes');
                return fileTypes ? fileTypes.join(', ') : '';
            }
        },

        /**
         * @property {can.List} file-uploader.scope.files files
         * @description Manages the selected files.
         * @option {can.List} Default is empty array.
         */
        files:{
            value:[]
        },

        /**
         * @property {can.List} file-uploader.scope.fileTypes fileTypes
         * @description The file types array passed in during instantiation.
         * @option {can.List} Default is empty array.
         */
        fileTypes: {
            value: []
        },

        /**
         * @property {FormData} file-uploader.scope.formData formData
         * @description The `FormData` object that manages files for XMLHTTPRequests.
         * @option {FormData} Default is empty `FormData`.
         */
        fileData: {
            Value: FormData
        },

        /**
         * @property {boolean} file-uploader.scope.isMultiple isMultiple
         * @description Sets file control to multiple-file mode.
         * @option {boolean} Default is `false`.
         */
        isMultiple: {
            value: false,
            type: 'boolean'
        },

        /**
         * @property {boolean} file-uploader.scope.isReady isReady
         * @description True when at least one file has been selected.
         * @option {boolean} Default is `false`.
         */
        isReady: {
            value: false,
            type: 'boolean'
        },

        /**
         * @property {string} file-uploader.scope.fileUploadId fileUploadId
         * @description The unqiue input id.
         * @option {string} Default is `fileupload<random number>`.
         */
        fileUploadId: {
            value: function () {
                return 'fileupload' + Math.floor( Math.random() * 1000000 );
            },
            type: 'string'
        }
    },
    
    /**
     * @function file-uploader.scope.addFile addFile
     * @description Chceks if file is a valid object and a valid file type, then adds it to the file arrays.
     * @param {Object} file A file object.
     * @return {Array} List of cached files.
     */
    addFile:function(file){

        var files = this.attr('files'),
            data = this.attr('fileData');


        data.append(file.name,file);
        files.push(file);
        
        if ( this.attr('filesCount') > 0){
            this.attr('isReady',true);
        }

    }

});
