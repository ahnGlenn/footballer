package com.footballers.footBallers.controller.matching;

import com.footballers.footBallers.dto.QMatchDto;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/crawling")
public class CrawlingController {
    private WebDriver driver;
    // 축매칭 공고(광명)
    private static final String invite112_url = "https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=11367414&search.searchdate=6m&search.searchBy=1&search.query=%B1%A4%B8%ED&search.defaultValue=1&search.includeAll=&search.exclude=&search.include=&search.exact=&search.sortBy=date&userDisplay=15&search.media=0&search.option=0&search.menuid=648";

    @GetMapping("/match")
    public List<String> test() throws Exception {

        // WebDriver 설정 - ChromeDriver 경로를 설정해야 합니다.
        System.setProperty("webdriver.chrome.driver", "/Users/ansangjae/Desktop/toy project/footballers/chromedriver-mac-x64/chromedriver");

        // ChromeOptions 설정 캐시 삭제용
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.setCapability("networkConnectionEnabled", false);

        // Chrome 브라우저를 열기
        driver = new ChromeDriver(chromeOptions);

        return getDataList();

    }

    private List<String> getDataList() throws Exception {

        List<String> matchList = new ArrayList<>();

        try {
            // login first(no solution to avoid captcha logic)
            // loginNaver();

            driver.get(invite112_url);
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
            // Wait until its(page) fully loaded.
            wait.until(webDriver -> ((JavascriptExecutor) webDriver).executeScript("return document.readyState").equals("complete"));


            // If it's in Iframe, Declaration is a must.
            driver.switchTo().frame("cafe_main");

            // Retrieve all matches
            List<WebElement> trElements = driver.findElements(By.xpath("//*[@id='main-area']/div[5]/table/tbody/tr"));
            for (WebElement trElement : trElements) {
                WebElement targetElement = trElement.findElement(By.xpath("./td[1]/div[2]/div/a"));

                String text = targetElement.getText();

                System.out.println(">> list print : " + text);
                matchList.add(text);
            }

            // Escape from 'Iframe' and then go back to the Original states.
            driver.switchTo().defaultContent();
        }
        catch(Exception e){
            e.getStackTrace();
        }
        finally {
            // Close
            driver.quit();
        }

        return matchList;
    }


    private void loginNaver() throws Exception{
        try {

            // 웹사이트에 접속
            driver.get("https://nid.naver.com/nidlogin.login");

            // 로그인 정보 입력
            WebElement usernameField = driver.findElement(By.id("id"));
            WebElement passwordField = driver.findElement(By.id("pw"));

            usernameField.sendKeys("dkstkdwo93");
            passwordField.sendKeys("");

            // 로그인 버튼 클릭
            WebElement loginButton = driver.findElement(By.id("log.login"));
            loginButton.click();

        }catch (Exception e){
            e.getStackTrace();
        }
    }

}

