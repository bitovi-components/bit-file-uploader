import can from 'can';
import 'can/map/define/';

export default can.Map.extend({
    define:{
        
        /**
         * @function file-uploader.viewModel.filesCount filesCount
         * @parent file-uploader/viewModel
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
         * @function file-uploader.viewModel.fileTypeList fileTypeList
         * @parent file-uploader/viewModel
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
         * @property {can.List} file-uploader.viewModel.files files
         * @parent file-uploader/viewModel
         * @description Manages the selected files.
         * @option {can.List} Default is empty array.
         */
        files:{
            value:[]
        },

        /**
         * @property {can.List} file-uploader.viewModel.fileTypes fileTypes
         * @parent file-uploader/viewModel
         * @description The file types array passed in during instantiation.
         * @option {can.List} Default is empty array.
         */
        fileTypes: {
            value: []
        },

        /**
         * @property {FormData} file-uploader.viewModel.formData formData
         * @parent file-uploader/viewModel
         * @description The `FormData` object that manages files for XMLHTTPRequests.
         * @option {FormData} Default is empty `FormData`.
         */
        fileData: {
            Value: FormData
        },

        /**
         * @property {boolean} file-uploader.viewModel.isMultiple isMultiple
         * @parent file-uploader/viewModel
         * @description Sets file control to multiple-file mode.
         * @option {boolean} Default is `false`.
         */
        isMultiple: {
            value: false,
            type: 'boolean'
        },

        /**
         * @property {boolean} file-uploader.viewModel.isReady isReady
         * @parent file-uploader/viewModel
         * @description True when at least one file has been selected.
         * @option {boolean} Default is `false`.
         */
        isReady: {
            value: false,
            type: 'boolean'
        },

        /**
         * @property {string} file-uploader.viewModel.fileUploadId fileUploadId
         * @parent file-uploader/viewModel
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
     * @function file-uploader.viewModel.addFile addFile
     * @parent file-uploader/viewModel
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
