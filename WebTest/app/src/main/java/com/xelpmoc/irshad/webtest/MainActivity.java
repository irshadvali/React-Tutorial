package com.xelpmoc.irshad.webtest;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.telecom.Call;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.RelativeLayout;
import android.widget.Toast;

import com.xelpmoc.irshad.webtest.apiservice.HttpRef;
import com.xelpmoc.irshad.webtest.model.UriModel;

import java.util.Timer;
import java.util.TimerTask;

import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {
    WebView webView;
    Timer timer;
    TimerTask timerTask;
    RelativeLayout overlay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        overlay = (RelativeLayout) findViewById(R.id.overlay);
        overlay.setVisibility(View.VISIBLE);
        getUriPath();

    }



    public void getUriPath(){
        retrofit2.Call<UriModel> call=HttpRef.createService().getUriPath();
        call.enqueue(new Callback<UriModel>() {
            @Override
            public void onResponse(retrofit2.Call<UriModel> call, Response<UriModel> response) {
                if(response.body().getUrl()!=null){
                    loadUrl(response.body().getUrl());
                }
                else {
                    Toast.makeText(getApplicationContext(),"Something went wrong",Toast.LENGTH_SHORT).show();
                }

            }

            @Override
            public void onFailure(retrofit2.Call<UriModel> call, Throwable t) {
                Toast.makeText(getApplicationContext(),"Something went wrong",Toast.LENGTH_SHORT).show();
            }
        });

    }

    public void loadUrl(String urlpath){

        Intent intent = getIntent();
        webView = (WebView) findViewById(R.id.webview);
        webView.setWebViewClient(new WebViewClient());
        webView.getSettings().setLoadsImagesAutomatically(true);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
        webView.loadUrl(urlpath);
        timer = new Timer();
        timerTask = new TimerTask() {
            @Override
            public void run() {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        overlay.setVisibility(View.GONE);
                    }
                });


            }
        };

        timer.schedule(timerTask, 3000);

//        overlay.setVisibility(View.GONE);



    }

}
