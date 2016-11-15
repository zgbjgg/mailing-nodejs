# send email from node js attaching 2 files

NODE=node

build:
	@sudo npm install

example:
	@echo In order to use the script:
	@echo node -e 'require("./mailing").init(to, pdf_path, xml_path)'
	@echo to - the email address where send email
	@echo pdf_path - the path to the pdf file
	@echo xml_path - the path to the xml file
	@echo TIP: dont forget enclose the require into single quotes
