import { Component, OnInit, SecurityContext } from '@angular/core';
import { reviewAttribute } from './../../../../../../../../src/models/db';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from './../../../../shared/services/http.service';

@Component({
  selector: 'app-reviews-view-page',
  templateUrl: './reviews-view-page.component.html',
  styleUrls: ['./reviews-view-page.component.scss']
})
export class ReviewsViewPageComponent implements OnInit {
  static get parameters() {
    return [DomSanitizer];
  }

  reviewsVideo: reviewAttribute[] = [];
  limitVideo = 6;
  countVideo = 0;
  filter = { limit: this.limitVideo, offset: 0 };

  limitImage = 12;
  countImage = 0;
  filterImage = { limit: this.limitImage, offset: 0 };
  reviewsImage: reviewAttribute[] = [];

  pageFirstText = '<< หน้าแรก';
  pagePreviousText = 'ย้อนกลับ';
  pageNextText = 'ถัดไป';
  pageLastText = 'สุดท้าย >>';

  testVideo = '';

  constructor(
    private httpService: HttpService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.searchVideo();
    this.searchImage();
    this.scrollToView();
  }

  scrollToView(): void {
    if (window.innerWidth < 991) {
      window.scroll({
        top: 825,
        behavior: 'smooth'
      });
    }
  }

  // VIDEO
  searchVideo() {
    this.httpService.get('/api/review/admin', this.filter).then((res) => {
      // this.reviewService.getVideoReview(this.filter).then((res) => {
      this.countVideo = res.count;
      res.rows.forEach(element => {
        element.reviewPart = this.sanitizer.bypassSecurityTrustUrl(encodeURIComponent(element.reviewPart));
      });
      this.reviewsVideo = res.rows;
    });
  }

  pageChangedVideo(event) {
    this.filter.limit = this.limitVideo;
    this.filter.offset = 0;
    if (event.page > 1) {
      this.filter.offset = (event.page - 1) * this.limitVideo;
    }
    this.searchVideo();
  }

  // IMAGE
  searchImage() {
    // this.reviewService.getImageReview(this.filterImage).then((res) => {
    this.httpService.get('/api/review/customer', this.filterImage).then((res) => {
      this.reviewsImage = res.rows;
      this.countImage = res.count;
    });
  }

  pageChangedImage(event) {
    this.filterImage.limit = this.limitImage;
    this.filterImage.offset = 0;
    if (event.page > 1) {
      this.filterImage.offset = (event.page - 1) * this.limitImage;
    }
    this.searchImage();
  }

  byPassURL() {
    const url = encodeURIComponent('https://web.facebook.com/ruaysombatcar/videos/268549894271825/');
    this.testVideo = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL,
      this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }

}
