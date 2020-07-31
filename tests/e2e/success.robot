*** Settings ***
Library    SeleniumLibrary
Test Setup    เปิดหน้า web toys-r-not-us ด้วย chrome
Test Teardown    ปิด browser

*** Variables ***
${Url}    https://khanend.github.io/toy
${Toy_Name}     Les Dollie Toffee Apple
${Toy_Age}    todler
${Toy_Gender}    female
${Toy_Status}    InStock
${Toy_Price}    24.95
${Toy_Amount}    1
${Toy_Shipping}    order_summary
${Toy_Order_Total}    order_total
${Toy_Quantity}    order_quantity
${Toy_ages}    Todler
${Customer_Name}    Name-Surname
${Add1}    Add-1
${Add2}    Add-2
${City}    City-Name
${Province}    Bangkok
${Post_Code}    10600

*** Keywords ***
เปิดหน้า web toys-r-not-us ด้วย chrome
    Open Browser    ${Url}    chrome

หน้าค้นหาของเล่น Les Dollie Toffee Apple
    Select From List By Value    dd_age    ${Toy_Age}   # Toddler
    Select From List By Value    dd_gender    ${Toy_Gender}    # Female
    Click Button    btn_search
    Page Should Contain    ${Toy_Name}
    Click Element    toy_name

หน้าแสดงข้อมูลของสิ่งที่ต้องการ
    ${Actaul_Toy_Name}    Get Text    title_name
    Should Be Equal As Strings    ${Toy_Name}    ${Actaul_Toy_Name}

    #######
    ${Actaul_Toy_Gender}    Get Text    gender
    Should Be Equal As Strings    ${Toy_Gender}   ${Actaul_Toy_Gender}

    ${Actaul_Toy_Age}    Get Text    age
    Should Be Equal As Strings    ${Toy_ages}     ${Actaul_Toy_Age}

    ${Actaul_Toy_Price}    Get Text    price
    Should Be Equal As Strings    ${Toy_Price}    ${Actaul_Toy_Price}

    ${Actaul_Toy_Status}    Get Text    /html/body/app-root/div/app-toy-detail/ul/span[2]
    Should Be Equal As Strings    ${Toy_Status}     ${Actaul_Toy_Status}

    Select From List By Value    dd_toy_quantity    ${Toy_Amount}

    Click Button    /html/body/app-root/div/app-toy-detail/p[2]/button
    

#--- TODO
เช็คตะกร้าสินค้า
    ${Actaul_Price}    Get Text    /html/body/app-root/div/app-shopping-cart/table/tbody/tr[2]/td[3]
    Should Be Equal As Strings    ${Toy_Price}    ${Actaul_Price}

กรอกข้อมูลที่อยู่	
    Input Text    ${Customer_Name}
    Input Text    ${Add1}
    Input Text    ${Add2}
    Input Text    ${City}
    Input Text    ${Province}
    Input Text    ${Post_Code}
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

ปิด browser
    Close Browser

*** Test Cases ***
Test: Toy R Not US
    หน้าค้นหาของเล่น Les Dollie Toffee Apple
    # หน้าแสดงข้อมูลของสิ่งที่ต้องการ
    # เช็คตะกร้าสินค้า
    # กรอกข้อมูลที่อยู่
    # เช็คหน้าชำระเงิน    
