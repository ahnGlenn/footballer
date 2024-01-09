package com.footballers.footBallers.controller.matching;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/crawling")
public class CrawlingController {
    private WebDriver driver; // %26queryTop=
    private static final String url = "https://cafe.naver.com/haha999?iframe_url=/ArticleList.nhn%3Fsearch.clubid=11367414%26search.menuid=948%26search.boardtype=L";

    // 용병 신청 페이지
    private static final String aplcnt_url = "https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=11367414&search.searchdate=all&search.searchBy=0&search.query=%B1%A4%B8%ED&search.defaultValue=1&search.includeAll=&search.exclude=&search.include=&search.exact=&search.sortBy=date&userDisplay=15&search.media=0&search.option=0&search.menuid=790";
    @GetMapping("/match")
    public List<String> test() throws IOException, InterruptedException {

        // WebDriver 설정 - ChromeDriver 경로를 설정해야 합니다.
        System.setProperty("webdriver.chrome.driver", "/Users/ansangjae/Desktop/toy project/footballers/chromedriver-mac-x64/chromedriver");

        // Chrome 브라우저를 열기
        driver = new ChromeDriver();

        getDataList();

        return Arrays.asList("안녕하세요", "Hello");

    }

    private List<String> getDataList() throws InterruptedException {
        List<String> list = new ArrayList<>();

        driver.get(url);

        // if it's in Iframe, Declaration is a must.
        driver.switchTo().frame("cafe_main");

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));

        // Wait until its(page) fully loaded.
        wait.until(webDriver -> ((JavascriptExecutor) webDriver).executeScript("return document.readyState").equals("complete"));
        //WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='main-area']/div[4]/table/tbody/tr[1]/td[1]/div[2]/div/a")));

        List<WebElement> elementList = driver.findElements(By.xpath("//*[@id='main-area']/div[4]/table/tbody/tr[1]/td[1]/div[2]/div/a"));

        for (WebElement element : elementList) {
            System.out.println("[list text] : " + element.getText());
        }

        // escape from 'Iframe' and then go back to the Original states.
        driver.switchTo().defaultContent();

        return list;
    }
}
