package com.xelpmoc.irshad.webtest;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.WindowManager;

import java.util.Timer;
import java.util.TimerTask;

public class SplashScreen extends AppCompatActivity {
    Timer timer;
    TimerTask timerTask;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);

        timer = new Timer();
        timerTask = new TimerTask()
        {
            @Override
            public void run()
            {
                gotoNextScreen();
            }
        };

        timer.schedule(timerTask,2500);
    }

    public void gotoNextScreen(){

    }

}
