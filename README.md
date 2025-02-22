<div align="center">
VIETNAM NATIONAL UNIVERSITY, HO CHI MINH CITY
<br />
UNIVERSITY OF TECHNOLOGY
<br />
FACULTY OF COMPUTER SCIENCE AND ENGINEERING
<br />
<img align="center" width="200" height="200" src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/hai/SoftwareReport/R/REPORT/Logo-BK.png">

**Software Engineering / Semester 212**
<br/>
**Team iGears**

</div>



# POINT OF SALE 2.0

## Team member:
This project is proudly done by:
* [Le Nguyen Tan Loc](https://github.com/leloc0609)
* [Nguyen Van Quang](https://github.com/quangnguyen310)
* [Vu Hoang Hai](https://github.com/DaTha7)
* [Nguyen Le Thao Vy](https://github.com/vy-nguyenlethao0510)
* [Nguyen Ly Dang Khoa](https://github.com/Khoabk) <br />

## Languages & Tools

- Front-end: <img src="https://cdn1.iconfinder.com/data/icons/social-icon-1-1/512/social_style_1_html5-256.png" align="center" style="margin-left:10px;margin-bottom:5px" width=30px/> <img src="https://cdn1.iconfinder.com/data/icons/social-icon-1-1/512/social_style_1_css3-256.png" align="center" style="margin-left:10px;margin-bottom:5px" width=30px/> <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png" align="center" style="margin-left:10px;margin-bottom:5px" width=45px/> <img src="https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-256.png" align="center" style="margin-left:5px;margin-bottom:5px" width=30px/>
- Back-end: <img src="https://icon-library.com/images/django-icon/django-icon-0.jpg" align="center" style="margin-left:10px;margin-bottom:5px" width=30px/> <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-256.png" align="center" style="margin-left:5px;margin-bottom:5px" width=30px/>
- API
- Version Control: <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" align="center" style="margin-left:10px;margin-bottom:5px" width=30px/>
- UML Diagram: <img src="https://blog.tda-corp.co.jp/wp-content/uploads/2020/05/DrawIO.png" align="center" style="margin-left:10px;margin-bottom:2px" width=70px/> <img src="https://mma.prnewswire.com/media/688080/lucidchart_logo_Logo.jpg?p=facebook" align="center" style="margin-left:10px;margin-bottom:2px" width=70px/>
- Report: <img src="https://www.unixmen.com/wp-content/uploads/2015/08/texstuio.png" align="center" style="margin-left:10px;margin-bottom:5px;" width=70px/>

## Project briefing

### Context
This project is targeted to be a web-based point-of-service (POS) system that empowers restaurants administrative with class management tools in order to operate their business efficiently.
Apart from the regular dine-in service mode, this system also incorporates Internet-based and QRcode-enabled applications to address the difficulties occurred during the COVID-19 pandemic. It
facilitates simplified, straight-forward and contact-less interactions between restaurant customers
and staffs, e.g. food ordering, servicing, and payment in any convenience. The application also supports automation of various internal restaurant management tasks, such as order recording, order
status managing, transaction recording, etc.

<p align="center">
<img src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/hai/SoftwareReport/R/REPORT/61017fc978f5606b7f0ee2de_aloha-essentials-and-silver-no-orderpay-p-800.png">
</p>

### Stateholders

The relevant stakeholders of this proposed system may include human resources such restaurant owner, managers, and staff (including clerks, chefs and janitors), and external consumerism, e.g.restaurant customers/clients.

### Features
The system consists of the following features that enable the complete functionality:
* A menu screen for displaying the restaurant’s menu; customers can make their selections in
this screen.
* A detail screen for each food, which will provide pictures and/or related information of a
specific food.
* A cart that visually display customer’s selected food; this screen allows customers to re-check,
edit and place their orders.
* A payment screen that offers different payments options.
* An order processing screen that will be displayed while the food being made; this screen contains status of customer’s pending order.
* A feedback screen to receive customers’ feedback on qualities of the restaurant’s food and
services.


## Requirements and use-case
The following section describes the all functional and non-functional requirements in context
of the desired system. A use case diagram is also presented to cohesively illustrate the interactions of the said system.

### Scopes 
The central objective of this project is to propose a web-based solution for restaurant owners,
to help them maintain the normal operation of their business, while limiting physical / direct interactions between restaurant customers and staff as much as possible. To illiterate in clearer details, the in and out scopes are as follows:

#### In scope:
* A responsive website with attractive UI, categorization, filter and search functionality.
* A back-end system to provide support for multiple restaurants, with the ability of handling
approximately 300 transactions per day.
* An online database that supports inventory management.

#### Out of scope
* Interactive platform to facilitate contactless interactions between restaurant staff.
* Restaurant staff management system.
* Delivery management system.
* Payment processing system.

## System use-case digram 
<p align="center">
<img src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/hai/SoftwareReport/R/REPORT/259243473_617353449353167_471014773977634987_n.png" >
</p>

## System modeling

This section will perform laid-out diagrams to capture the major functional requirements of the
desired restaurant POS system. It is divided into three caconicals of an activity diagram, a sequence diagram and a class diagram.

### Activity diagram 
<p align="center">
    <img src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/main/SoftwareReport/R/REPORT/Screenshot%202022-03-05%20180519.png">
 </p>
 
### Sequence diagram

<p align="center">
    <img src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/main/SoftwareReport/R/REPORT/Screenshot%202022-03-05%20182607.png">
  <img src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/main/SoftwareReport/R/REPORT/image.png">
 </p>
 
 ### Class diagram
 
 <p align="center">
    <img src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/main/SoftwareReport/R/REPORT/image%20(2).png">
  </p>
 
## System architecture
A fundamental approach to visualize the structural integrity of the entire restaurant point-ofsale system presented in this project is via a cohesive blueprint of the overall architecture. In this
section, all of the foundational components of the application are described in detail, with reasoning
of choice and facilitation.

### Cloud-native architecture pattern
There are numerous architectural patterns that capture the design structures of various systems
and elements of software so that they can be reused. For this project’s system, to fully utilize the
power of cloud-based ordering point-of-sale, using application programming interfaces (APIs) instead
of a fixed model, a much more advanced version of Model-View-Controller (MVC) pattern is needed.

<img src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/hai/SoftwareReport/R/REPORT/Cloud-native%20Arch.png">

### Architecture foundation
Cloud-native architecture is a suitable upgrade for MVC. It allows dynamic and agile application
development techniques that take a modular approach (API with user-interfaces and services) to
building, running, and updating software through a suite of cloud-based microservices and containerization with agility and dynamism versus a monolithic application infrastructure.

### Functional requirement implementation

The following deployment diagram models the physical deployment of artifacts on nodes, in
this case, the topology of the POS system outlines six logical components: website package, customer management, order, menu, payment and seating requirements.
When a user executes an order on the website, their operations are performed in a packaged
online environment. One can visit the website, browse through a list of menus, make order and
seating reservation, while optionally choose to sign up or sign in to their account. After everything is completed, the payment system shall be activated and can access the customer database if
prompted.

<img src="https://github.com/vy-nguyenlethao0510/HCMUT_CSE_POS_2.0/blob/hai/SoftwareReport/R/REPORT/functrq.png">
