#include <gd.h>
#include <stdio.h>

int main() {
    // 設定國旗的寬度和高度
    int width = 1200;
    int height = 600;

    // 創建一個新的圖像
    gdImagePtr img = gdImageCreateTrueColor(width, height);

    // 設定背景顏色為白色
    int white = gdImageColorAllocate(img, 255, 255, 255);
    gdImageFill(img, 0, 0, white);

    // 設定紅色，即日本國旗的顏色
    int red = gdImageColorAllocate(img, 255, 0, 0);

    // 設定圓的半徑和中心座標
    int radius = height / 3;
    int centerX = width / 2;
    int centerY = height / 2;

    // 繪製圓
    gdImageFilledEllipse(img, centerX, centerY, radius * 2, radius * 2, red);

    // 輸出圖像到檔案
    FILE *outputFile = fopen("japan_flag.png", "wb");
    gdImagePng(img, outputFile);
    fclose(outputFile);

    // 釋放圖像資源
    gdImageDestroy(img);

    return 0;
}
 