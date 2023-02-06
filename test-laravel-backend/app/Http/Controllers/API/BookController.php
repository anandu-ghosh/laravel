<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Http\Resources\BookResource;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\JsonResponse;

use Illuminate\Support\Facades\Http;


class BookController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     
    public function index() :AnonymousResourceCollection
    {
        /**
 * @author [Ananthu Ghosh]
 * 
 * @create date 2023-02-05 00:33:59
 * @modify date 2023-02-05 00:33:59
 * @desc [description]
 */
        $books = Book::all();
        return BookResource::collection($books);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBookRequest $request) : JsonResponse
    {
        

        $data = $request->validated();
        $books = Book::create($data);

        if ($books) {
            return $this->sendResponse('Books Created',new BookResource($books));
        } else {
            return $this->sendError('Something Went Wrong');
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book) : BookResource
    {
         
        return new BookResource($book);

        
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBookRequest $request, Book $book) 
    {
        //
        $data = $request->validated();
        $book->update($data);
        return $this->sendResponse('Book updated.', new BookResource($book));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book) : JsonResponse
    {
        $book->delete();
        return $this->sendResponse('Book deleted.');

    }

    //for insert data via given api call http://127.0.0.1:8000/api/apidatas

    public function insertData() 
    {
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'https://fakerapi.it/api/v1/books?_quantity=100');
        $books_data = json_decode($res->getBody());

        foreach($books_data->data as $books){
            $book = new Book;
            $book->title = $books->title;
            $book->author = $books->author;
            $book->genere = $books->genre;
            $book->description = $books->description;
            $book->isbn = $books->isbn;
            $book->image = $books->image;
            $book->publisher = $books->publisher;
            $book->published = $books->published;
            $book->save();
        }
        return "DONE";
    }
}
