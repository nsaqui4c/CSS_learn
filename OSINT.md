# OSINT

## Google Dork

URL query structure  

* https://example.com/uploads/file.pdf  
		* https://example.com 	->  site  
		* uploads/file			-> inURL  
		* file.pdf				-> file type  
		
* https			: protocol; can be git:// webcal:// ftp:// gopher://
* www 			: subdomain; can be webmail secure www2 blog or u can chose not to have any subdomain
* example.com	: domain name
* :80			: port
* /prod/search	: path
* ?q=1&456=true	: query string

*********************************************

Google dork Operators:  


| operator | use | explanation |  
| --- | --- | --- |  
| site		| site:wikepidea.org 	| every result will be witin site wikepedia							|  
| inurl 	| inurl:login udemy		| site:udemy.com inurl:login; either login udemy case insensitive	|
| allinurl 	| allinurl:login udemy	| site:udemy.com inurl:login;both login and udemy					|
| intitle 	| intitle:google search	| google should be in tile; search can be anywhere in doc			|
| allintitle| allintitle:bing search| both should be in title											|
| link	 	| link:www.google.com	| we can link:india; return all link containing india				|
| cache 	| cache:netflix			| Archive.org/waybackmachine give same functionality				|
| filetype 	| filetype:pdf			| site:xyz.com filetype:pdf; return all pdf from xyz		 		|
| intext 	| intext:socal media	| search text in the page											|
| indexof 	| intitle:index.of.etc	| we can try site:udemy.com inurl:login								|


* shtml - html file with information included on the fly (live streaming)
		* inurl:view/index.shtml
		
* intitle:"index of" config.php