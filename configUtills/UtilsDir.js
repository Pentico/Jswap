/**
 *Created By Tuane on 2016/10/26 
 */

'use strict';

 import fs from 'fs-extra';

 class UtilDir {
     constructor(){}

     /**
      * Create a file
      */
     onCreateFile(File) {

         fs.ensureFile(File, function(err){
             console.log(err); // => null 
             // fiie has now been created, inlcuding the dir it is to be placed in.
         });
     } // EOF

     /**
      * Create a directory
      */
     onCreateDir(dir){
         fs.ensureDir(dir, function(err){
             console.log(err);// => null 
             // fiie has now been created, inlcuding the dir it is to be placed in.
         });
     } // EOF

     /**
      * Delete a file or dir
      */ 
     onDelete(path){
         fs.remove(path, function(err){
             if(err){
                 return console.error(err);
             }
             console.log('removed path')
         });
         
     } // EOF

     /**
      * Empty directory and Create the directory.
      */
     onEmptyDir(path){
         fs.emptyDir(path, function(err){
             if(!err){
                 console.log('Folder emptied');
             }
         });
     } // EOF

     /**
      * Create a copy of directory or file
      *@param oldCopy,newCopy they are paths.
      */
      onCreateCopy(oldCopy, newCopy){
          fs.copy(oldCopy, newCopy, function(err){
              if(err){
                  return console.error(err);
              }
              console.log('Copy of directory created');
          });
      } // EOF

 }

 export default UtilDir;