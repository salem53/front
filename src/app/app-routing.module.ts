import { SkillsQuestionsComponent } from './skills-questions/skills-questions.component';
import { ListInvitationsFreelancerComponent } from './list-invitations-freelancer/list-invitations-freelancer.component';
import { FreelancerFeedbackComponent } from './freelancer-feedback/freelancer-feedback.component';

import { ListFeedbacksFreelancerComponent } from './list-feedbacks-freelancer/list-feedbacks-freelancer.component';
import { InviteFreelancerComponent } from './invite-freelancer/invite-freelancer.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {SidebarLeftComponent} from './sidebar-left/sidebar-left.component';
import {SidebarRightComponent} from './sidebar-right/sidebar-right.component';
import {SignupComponent} from './signup-freelancer/signup.component';
import {SigninComponent} from './signin-freelancer/signin.component';

import {ListFreelancersComponent} from "./list-freelancers/list-freelancers.component";
import {UpdateFreelancerComponent} from "./update-freelancer/update-freelancer.component";
import {SigninClientComponent} from "./signin-client/signin-client.component";
import {ListClientsComponent} from "./list-clients/list-clients.component";
import {UpdateClientComponent} from "./update-client/update-client.component";
import {SigninAdminComponent} from "./signin-admin/signin-admin.component";
import {SignupAdminComponent} from "./signup-admin/signup-admin.component";
import {ListAdminsComponent} from "./list-admins/list-admins.component";
import {UpdateAdminComponent} from "./update-admin/update-admin.component";
import {SignupClientComponent} from "./signup-client/signup-client.component";
import {FreelancerNewsfeedComponent} from "./freelancer-newsfeed/freelancer-newsfeed.component";
import {SignoutFreelancerComponent} from "./signout-freelancer/signout-freelancer.component";
import {FreelancerAuthGuardService} from "./services/freelancer/freelancer-auth-guard.service";
import {SignoutClientComponent} from "./signout-client/signout-client.component";
import {SignoutAdminComponent} from "./signout-admin/signout-admin.component";
import {ClientNewsfeedComponent} from "./client-newsfeed/client-newsfeed.component";
import {AdminNewsfeedComponent} from "./admin-newsfeed/admin-newsfeed.component";
import {AdminAuthguardService} from "./services/admin/admin-authguard.service";
import {ClientAuthguardService} from "./services/client/client-authguard.service";
import {TestFlaskComponent} from "./test-flask/test-flask.component";
import {PaypalTestComponent} from "./paypal-test/paypal-test.component";
import {PdfTestComponent} from "./pdf-test/pdf-test.component";

import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';
import { AddMissionComponent } from './add-mission/add-mission.component';
import { AddStudyComponent } from './add-study/add-study.component';
import { AddSkillComponent } from './add-skill/add-skill.component';

import {UpdateFreelancerDataProfileComponent} from './update-freelancer-data-profile/update-freelancer-data-profile.component';
import {UpdateClientDataProfileComponent} from './update-client-data-profile/update-client-data-profile.component';
import {PostProjectsComponent} from './post-projects/post-projects.component';
import {BrowseProjectsComponent} from './browse-projects/browse-projects.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ListCompletedFreelancerMissionsComponent} from './list-completed-freelancer-missions/list-completed-freelancer-missions.component';
import {ListCompletedClientMissionsComponent} from './list-completed-client-missions/list-completed-client-missions.component';
import {FoundedFreelancersComponent} from './founded-freelancers/founded-freelancers.component';
import {FoundedMissionsComponent} from './founded-missions/founded-missions.component';
import {HiredMissionsFreelancerComponent} from './hired-missions-freelancer/hired-missions-freelancer.component';
import {HiredMissionsClientComponent} from './hired-missions-client/hired-missions-client.component';

import {ManageApplicationClientComponent} from './manage-application-client/manage-application-client.component';
import {NotHiredMissionDetailsComponent} from './not-hired-mission-details/not-hired-mission-details.component';

import { ListAppliedMissionsFreelancerComponent } from './list-applied-missions-freelancer/list-applied-missions-freelancer.component';



const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'paypal', component: PaypalTestComponent },
  { path: 'pdfTest', component: PdfTestComponent },
  { path: 'paypal/:id/:money', component: PaypalTestComponent },
  { path: 'search', component: SearchBarComponent },
  { path: 'founded-freelancer/:skills', component: FoundedFreelancersComponent},
  { path: 'founded-mission/:skills', component: FoundedMissionsComponent},

  { path: 'test', component: TestFlaskComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sidebar-left', component: SidebarLeftComponent },
  { path: 'sidebar-right', component: SidebarRightComponent },
  { path: 'signin-freelancer', component: SigninComponent },
  { path: 'signup-freelancer', component: SignupComponent },

  { path: 'signout-freelancer', component: SignoutFreelancerComponent, canActivate: [FreelancerAuthGuardService] },
  { path: 'newsfeed-freelancer', component: FreelancerNewsfeedComponent, canActivate: [FreelancerAuthGuardService] },
  { path: 'browse-project', component: BrowseProjectsComponent, canActivate: [FreelancerAuthGuardService] },
  { path: 'manage-applications-freelancer', component: BrowseProjectsComponent, canActivate: [FreelancerAuthGuardService] },
  { path: 'list-completed-freelancer-mission', component: ListCompletedFreelancerMissionsComponent, canActivate: [FreelancerAuthGuardService] },
  { path: 'hired-missions-freelancer', component: HiredMissionsFreelancerComponent, canActivate: [FreelancerAuthGuardService] },

  { path: 'freelancers', component: ListFreelancersComponent, canActivate: [AdminAuthguardService] },
  { path: 'signin-client', component: SigninClientComponent },
  { path: 'signup-client', component: SignupClientComponent },
  { path: 'signout-client', component: SignoutClientComponent, canActivate: [ClientAuthguardService] },
  { path: 'hired-missions-client', component: HiredMissionsClientComponent, canActivate: [ClientAuthguardService] },
  { path: 'not-hired-mission-details', component: NotHiredMissionDetailsComponent, canActivate: [ClientAuthguardService] },
  { path: 'newsfeed-client', component: ClientNewsfeedComponent , canActivate: [ClientAuthguardService]},
  { path: 'post-project', component: PostProjectsComponent , canActivate: [ClientAuthguardService]},
  { path: 'manage-applications-client', component: ManageApplicationClientComponent , canActivate: [ClientAuthguardService]},
  { path: 'list-completed-client-mission', component: ListCompletedClientMissionsComponent , canActivate: [ClientAuthguardService]},
  { path: 'clients', component: ListClientsComponent, canActivate: [AdminAuthguardService] },
  { path: 'signin-admin', component: SigninAdminComponent },
  { path: 'signup-admin', component: SignupAdminComponent, canActivate: [AdminAuthguardService] },
  { path: 'signout-admin', component: SignoutAdminComponent, canActivate: [AdminAuthguardService] },
  { path: 'newsfeed-admin', component: AdminNewsfeedComponent, canActivate: [AdminAuthguardService] },
  { path: 'admins', component: ListAdminsComponent, canActivate: [AdminAuthguardService] },
  { path: 'updateFreelancer/:id', component: UpdateFreelancerComponent, canActivate: [AdminAuthguardService] },
  { path: 'updateClient/:id', component: UpdateClientComponent, canActivate: [AdminAuthguardService] },
  { path: 'updateAdmin/:id', component: UpdateAdminComponent, canActivate: [AdminAuthguardService] },

  { path: 'newExperience/:id', component: ExperienceComponent },
  { path: 'newCertification/:idFreelancer', component: CertificationComponent },
  {path: 'newMission/:idClient', component: AddMissionComponent},
  {path: 'newStudy/:idFreelancer', component: AddStudyComponent },

  {path: 'newSkill/:idFreelancer', component: AddSkillComponent},
  { path: 'update-freelancer-profile', component: UpdateFreelancerDataProfileComponent, canActivate: [FreelancerAuthGuardService] },
  { path: 'update-client-profile', component: UpdateClientDataProfileComponent, canActivate: [ClientAuthguardService] },
  {path: 'dashboard-client/:idClient', component: DashboardClientComponent},
  {path: 'invite-freelancer/:idMission',component: InviteFreelancerComponent},
  {path: 'listFeedbacks-freelancer/:idFreelancer',component: ListFeedbacksFreelancerComponent},
  {path: 'feedbackFreelancer/:idClient/:idMission',component: FreelancerFeedbackComponent},
  {path: 'invitationsForMissions',component: ListInvitationsFreelancerComponent},
  {path: 'listMissionsAppliedFor',component: ListAppliedMissionsFreelancerComponent},
  {path: 'validateSkills',component: SkillsQuestionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
