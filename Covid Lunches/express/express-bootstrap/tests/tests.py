from selenium import webdriver
from selenium.webdriver.common.by import By

URL = r"http://localhost:3000"
exec_path = r"C:\Users\rroh5\OneDrive\Desktop\covid lunches\Covid-Lunches-03\Covid Lunches\express\express-bootstrap\tests\chromedriver_win32\chromedriver.exe"

tab_locator = ["a[href=/tab_1]", "a[href=/tab_2]", "a[href=/tab_3]", "a[href=/tab_4]", "a[href=/tab_5]"]
link_locator = ["baltimorecountymd.gov", "bcps.org", "baltimorecityschools.org", "211md.org", "mdfoodbank.org"]

driver = webdriver.Chrome(executable_path=exec_path)
driver.implicitly_wait(10)
driver.get(URL)
driver.maximize_window()

# unsuccessful attempt at testing resources options on the web app.
for i in range(len(tab_locator)):

    # find the tab in the resources section and click it.
    tab = driver.find_element(By.CSS_SELECTOR,tab_locator[i])
    tab.click()
    time.sleep(1)

    # find the element in related to the tab and click it.
    link = driver.find_element(By.LINK_TEXT, link_locator[i])
    link.click()
    time.sleep(1)
