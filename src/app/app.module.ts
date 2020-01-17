import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './componentslist/homepage/homepage.component';
import { NguCarouselModule } from '@ngu/carousel';
import { FooterTagComponent } from './footer/footer-tag/footer-tag.component';
import { CoursesDetailViewComponent } from './componentslist/courses/courses-detail-view/courses-detail-view.component';
import { AccountSettingsComponent } from './profile/account-settings/account-settings.component';
import { HeaderComponent } from './header/header.component';
import { OtherHeaderComponent } from './other-header/other-header.component';
import { CollegeApplicationComponent } from './college-application/college-application.component';
import { PopupModelsComponent } from './popup-models/popup-models.component';
import { CollegeSinglePageComponent } from './college-single-page/college-single-page.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CourseDetailSpecilizationComponent } from './course-detail-specilization/course-detail-specilization.component';
import { PartnerWithUsComponent } from './partner-with-us/partner-with-us.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { ResultComponent } from './result/result.component';
import { SalaryTrendReportComponent } from './salary-trend-report/salary-trend-report.component';
import { PartnerWithusCollegeComponent } from './partner-withus-college/partner-withus-college.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseNameSpecializationComponent } from './course-name-specialization/course-name-specialization.component';
import { CollegeComparisionComponent } from './college-comparision/college-comparision.component';
import { RankPredictorComponent } from './rank-predictor/rank-predictor.component';
import { CareersAfterTwelveComponent } from './careers-after-twelve/careers-after-twelve.component';
import { CareersAfterTenthComponent } from './careers-after-tenth/careers-after-tenth.component';
import { CareersAfterPgComponent } from './careers-after-pg/careers-after-pg.component';
import { CareersAfterUgComponent } from './careers-after-ug/careers-after-ug.component';
import { TopCollegesHomeComponent } from './top-colleges/top-colleges-home/top-colleges-home.component';
import { TalkToExpertComponent } from './talk-to-expert/talk-to-expert.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { RegularStateBoardComponent } from './regular-state-board/regular-state-board.component';
import { AllIndiaBoardComponent } from './all-india-board/all-india-board.component';
import { OpenBoardComponent } from './open-board/open-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterTagComponent,
    CoursesDetailViewComponent,
    AccountSettingsComponent,
    HeaderComponent,
    OtherHeaderComponent,
    CollegeApplicationComponent,
    PopupModelsComponent,
    CollegeSinglePageComponent,
    TermsConditionsComponent,
    CourseDetailSpecilizationComponent,
    PartnerWithUsComponent,
    ShortlistComponent,
    ResultComponent,
    SalaryTrendReportComponent,
    PartnerWithusCollegeComponent,
    CourseNameSpecializationComponent,
    CollegeComparisionComponent,
    RankPredictorComponent,
    CareersAfterTwelveComponent,
    CareersAfterTenthComponent,
    CareersAfterPgComponent,
    CareersAfterUgComponent,
    TopCollegesHomeComponent,
    TalkToExpertComponent,
    ExamsComponent,
    ExamDetailsComponent,
    RegularStateBoardComponent,
    AllIndiaBoardComponent,
    OpenBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NguCarouselModule,NgMaterialMultilevelMenuModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
