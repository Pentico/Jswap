
'use strict'

/**
 * Created By Tuane  on 2016/11/09
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Link} from 'react-router';
import UploadItemStore from '../../stores/User/UploadItemStore';
import UploadItemActions from '../../actions/User/UploadItemActions';
import DropzoneComponent from 'react-dropzone-component';


class UploadItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = UploadItemStore.getState();
        this.onChange = this.onChange.bind(this);

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/UploadPicture'
        };
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            params : {
                _id : 5629
            }
        };
        
    }

    componentDidMount() {
        UploadItemStore.listen(this.onChange);

    } // EOF

      componentWillUnmount() {
        UploadItemStore.unlisten(this.onChange);
    } // EOF
 
    onChange(state) {
        this.setState(state);
    }

    handleFileAdded(file) {
        console.log('file Added @handleFileAdded');
        // console.log(file);
        // this.state.files.push(file);
        // console.log(this.state.files.length);
        // console.log(this.state.midropzone);
    }

    onDrop(acceptedFiles){

        console.log('on Drop call');
     
    //   UploadItemActions.loginAttempt({
    //       formdata:this.state.files
    //   })

    }

    initCallback (dropzone){
        console.log('in the initCallback');
        this.state.midropzone = dropzone;
    } // EOF

    removedfile (file){
        console.log('on removedfile');
        console.log(file.name);
        UploadItemActions.removeItem({
            name:file.name
        });
    } // EOF

    handleSubmitUploadItem(event) {
         event.preventDefault();

        //  let files = this.filesUpload.files;
        //  console.log(files.length);
         
    }// EOF

    render() {

         const config = this.componentConfig;
         const djsConfig = this.djsConfig;
                         
        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            removedfile: this.removedfile,
            onDrop : this.onDrop
        }

        return <DropzoneComponent config={config}
            eventHandlers={eventHandlers} djsConfig={djsConfig} /> ;
    }
} 

export  default UploadItem;