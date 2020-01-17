import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './componentslist/homepage/homepage.component';
import { CoursesDetailViewComponent } from './componentslist/courses/courses-detail-view/courses-detail-view.component';
import { AccountSettingsComponent } from './profile/account-settings/account-settings.component';
import { CollegeApplicationComponent } from './college-application/college-application.component';
import { CollegeSinglePageComponent } from './college-single-page/college-single-page.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CourseDetailSpecilizationComponent } from './course-detail-specilization/course-detail-specilization.component';
import { PartnerWithUsComponent } from './partner-with-us/partner-with-us.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { SalaryTrendReportComponent } from './salary-trend-report/salary-trend-report.component';
import { PartnerWithusCollegeComponent } from './partner-withus-college/partner-withus-college.component';
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

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'profile/account_settings', component: AccountSettingsComponent },//rithin
  { path: 'course_details', component: CoursesDetailViewComponent },//ashwini
  { path: 'college_application', component: CollegeApplicationComponent },//rithin
  { path: 'college_singlepage', component: CollegeSinglePageComponent },//bonti
  { path: 'course_detail_specialization', component: CourseDetailSpecilizationComponent },//bonti
  { path: 'terms_and_conditions', component: TermsConditionsComponent },//bonti
  { path: 'partner_with_us', component: PartnerWithUsComponent },//pashu
  { path: 'shortlist', component: ShortlistComponent },//rithin pg 9
  { path: 'result', component: ResultComponent },//rithin pg 64
  { path: 'salary_trend_report', component: SalaryTrendReportComponent },//rithin pg 94
  { path: 'partner_withus_college', component: PartnerWithusCollegeComponent },//pashu
  {path:'course_name_specialization',component:CourseNameSpecializationComponent},//pashu
  { path: 'college_comparision', component: CollegeComparisionComponent },//pashu
  { path: 'rank_predictor', component: RankPredictorComponent },//pashu
  { path: 'careers-after-twelve', component: CareersAfterTwelveComponent },//pashu
  { path: 'careers-after-tenth', component: CareersAfterTenthComponent },//pashu
  { path: 'careers-after-pg', component: CareersAfterPgComponent },//pashu
  { path: 'careers-after-ug', component: CareersAfterUgComponent },//pashu
  {path:'top-colleges',component:TopCollegesHomeComponent},//ashwini
  { path: 'talk-to-expert', component: TalkToExpertComponent },//pashu
  {path:'exams',component:ExamsComponent},//bonti
  {path:'exam_details',component:ExamDetailsComponent},//bonti
  { path: 'regular-state-board', component: RegularStateBoardComponent },//pashu
{ path: 'all-india-board', component: AllIndiaBoardComponent },//pashu
{ path: 'open-board', component: OpenBoardComponent },//pashu
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})



export class AppRoutingModule { }
