import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = {};
  constructor() { }

  ngOnInit() {
  }

  updateCrew(updateName: string, isFirstMission: boolean) {
    this.crew.push({name: updateName, firstMission: isFirstMission});
  }

  remove(crewMemberName: object) {
    let indexOfName = this.crew.indexOf(crewMemberName);
      this.crew.splice(indexOfName,1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = {};
  }
  
}
