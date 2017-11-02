package com.xelpmoc.irshad.webtest.apiservice;


import com.xelpmoc.irshad.webtest.model.UriModel;

import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Multipart;
import retrofit2.http.POST;
import retrofit2.http.Part;
import retrofit2.http.Query;

//import com.xelpmoc.zommodity.model.SellerEnqBidHistoryModel;

/**
 * Created by Irshad on 07/11/16.
 */
public interface ApiService {



    @GET(HttpRef.domain)
    Call<UriModel>getUriPath();
    }



