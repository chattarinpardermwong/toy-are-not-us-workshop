*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${Url}
${Actaul_Product_Name}     Les Dollie Toffee Apple  
${Product_Status}    toy_status
${Product_Price}    price
${Actaul_Product_Shipping}    order_summary
${Product_Order_Total}    order_total
${Product_Quantity}    order_quantity

*** Test Cases ***
ค้นหาของเล่น  Les Dollie Toffee Apple
    เปิดหน้า web toys-r-not-us ด้วย chrome
    หน้าค้นหาของเล่น  Les Dollie Toffee Apple
    หน้าแสดงข้อมูลของสิ่งที่ต้องการ
    Click link แรกที่แสดงผล
    ปิด Browser

*** Keywords ***
เปิดหน้า web toys-r-not-us ด้วย chrome
    Open Browser    ${Url}    chrome

หน้าค้นหาของเล่น  Les Dollie Toffee Apple
    Click Element    dd_gender
    Wait Until Element Is Enabled 
    Click Element    female
    Click Element    dd_age
    Wait Until Element Is Enabled 
    Click Element    Toddler
    Click Button   btn_search
    Click Element    Les Dollie Toffee Apple

หน้าแสดงข้อมูลของสิ่งที่ต้องการ
    ${Actaul_Product_Name}    Get Text    title_name
    Should Be Equal As Strings    ${Product_Name}    ${Actaul_Product_Name}
    ${Actaul_Product_Status}    Get Text    toy_status
    Should Be Equal As Strings    ${Product_Status}     ${Actaul_Product_Status}
    ${Actaul_Product_Price}    Get Text    title_Price
    Should Be Equal As Strings    ${Product_Price}    ${Actaul_Product_Price}
    Click Element    dd_toy_quantity
    Wait Until Element Is Enabled 
    Click Element    1
    Click Button   btn_add_cart

เช็คตะกร้าสินค้า	
    Click Button    shipping_method
    Click Button    btn_process

กรอกข้อมูลที่อยู่	
    Input Text    txt_name  
    Input Text    txt_address1  
    Input Text    txt_address2  
    Input Text    txt_city  
    Input Text    txt_province  
    Input Text    txt_postcode
    Click Button    btn_deliver

เช็คหน้าชำระเงิน
    ${Actaul_Product_Name}    Get Text    title_name
    Should Be Equal As Strings    ${Product_Name}    ${Actaul_Product_Name}
    ${Actaul_Product_Status}    Get Text    toy_status
    Should Be Equal As Strings    ${Product_Status}     ${Actaul_Product_Status}
    ${Actaul_Product_Price}    Get Text    title_Price
    Should Be Equal As Strings    ${Product_Price}    ${Actaul_Product_Price}
    ${Actaul_Product_Shipping}    Get Text    title_Shipping
    Should Be Equal As Strings    ${Product_Shipping}    ${Actaul_Product_Shipping}
    ${Actaul_Product_Order_Total}    Get Text    title_Order_Total
    Should Be Equal As Strings    ${Product_Order_Total}    ${Actaul_Product_Order_Total}
    ${Actaul_Product_Quantity}    Get Text    title_Quantity
    Should Be Equal As Strings    ${Product_Quantity}    ${Actaul_Product_Quantity}
    Click Element    rd_credit
    Input Text    txt_name
    Input Text    txt_no_card
    Input Text    txt_cvv
    Click Button    btn_placeorder