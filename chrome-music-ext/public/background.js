// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// "use strict";

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: "#3aa757" }, function() {
    setInterval(() => {
      console.log("The color is green.");
    }, 1000);
  });
  console.log("hello");
});
//
// let app = document.querySelector(".hello");
// app.addEventListener("click", () => {
//   console.log("hello clicked");
// });
