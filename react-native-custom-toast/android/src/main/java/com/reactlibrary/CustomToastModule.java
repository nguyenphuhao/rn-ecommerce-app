package com.reactlibrary;

import android.widget.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class CustomToastModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public CustomToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CustomToast";
    }

    @ReactMethod
    public void show(String message, int duration) {
        // TODO: Implement some actually useful functionality
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
