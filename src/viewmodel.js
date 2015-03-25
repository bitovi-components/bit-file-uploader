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
        files:{
            value:[]
        },
        
        fileTypes: {
            value: []
        },
        
        formData: {
            Value: FormData
        },
        
        isReady: {
            value: false,
            type: 'boolean'
        },
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
            data = this.attr('formData');


        data.append(file.name,file);
        files.push(file);
        
        if ( this.attr('filesCount') > 0){
            this.attr('isReady',true);
        }

    }

});
