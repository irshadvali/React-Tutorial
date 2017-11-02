package com.xelpmoc.irshad.webtest.model;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
/**
 * Created by Irshad on 31/10/17.
 */

public class UriModel {

    @SerializedName("url")
    @Expose
    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}