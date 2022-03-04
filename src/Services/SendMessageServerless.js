function SendMessageServerless(title, body){
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "key=AAAA5a7qdgM:APA91bE_wbZRbaIyl_SEHZIdYZlZm7M2jiwVAHiHIGfONWVGfd98dXv68uJPucxwnzVg6NZ1V06jwLK-VTpybDJWT--RxLioWWJz8_KSAdiu0B3vVCuyppSBOgGfUMB8A_J606LIsOX-");

    var raw = JSON.stringify({
        "data": {},
        "program": 1646330880,
        "notification": {
        "body": body,
        "title": title
    },
        "to": "cIJXN_tiTD2B0ogEZ2_Hcv:APA91bH103IqYSeDoCeWLn_u3Z_V0FfBHsDLlmSMUHZgYkyuDP7J-VEw-1hgLabuHU6vNmx73qyXzkRD8dcuN2nOR45bKOebt45E7nPFDrsUbcqnAvNGY_9fCsHamzNowauELlCQ00Wk"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

   fetch("https://fcm.googleapis.com/fcm/send", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};

export {SendMessageServerless};