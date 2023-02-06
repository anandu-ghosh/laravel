<?php

namespace App\Http\Traits;
use App\Models\Book;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;

trait imageUploadTrait{

        public function imageOrFileUpload(UploadedFile $uploadedFile,$folder=null,$disk='public',$filename=null){
               
                
                
                $name = !is_null($filename) ? $filename : Str::random(25);
  
                $file = $uploadedFile->move($folder, $name.'.'.$uploadedFile->getClientOriginalExtension(), $disk);
         
                return  $name;

        }

}

?>