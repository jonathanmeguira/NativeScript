"use strict";
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
var List = (function () {
    function List(router) {
        var _this = this;
        this.router = router;
        this.ToDoList = [];
        this.NewItem = "";
        this.router.queryParams.subscribe(function (params) {
            _this.UID = params["UID"];
            _this.FirebaseUrl = "users/" + _this.UID;
        });
    }
    List.prototype.AddItemToList = function () {
        var _this = this;
        console.log(this.NewItem);
        if (this.ToDoList.some(function (x) { return x === _this.NewItem; })) {
            alert("your to do list already contains this tak");
        }
        else if (this.NewItem === "") {
            alert("new task can not be nul");
        }
        else {
            this.ToDoList.push(this.NewItem);
            console.log(this.FirebaseUrl);
            firebase.setValue(this.FirebaseUrl, { task: this.NewItem });
            this.NewItem = "";
        }
    };
    List = __decorate([
        core_1.Component({
            selector: "List",
            templateUrl: "pages/list/list.html",
            styleUrls: ['pages/list/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], List);
    return List;
}());
exports.List = List;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxJQUFPLFFBQVEsV0FBVyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzFELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBV2pEO0lBT0ksY0FBb0IsTUFBc0I7UUFQOUMsaUJBK0JDO1FBeEJ1QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUxuQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUtoQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3BDLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFDLEtBQUksQ0FBQyxHQUFHLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsNEJBQWEsR0FBYjtRQUFBLGlCQWdCQztRQWRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEtBQUksQ0FBQyxPQUFPLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7UUFDdEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDcEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzdCLFFBQVEsQ0FBQyxRQUFRLENBQ2IsSUFBSSxDQUFDLFdBQVcsRUFDaEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUN6QixDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUF0Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztZQUFBO0lBbUNGLFdBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLFlBQUksT0ErQmhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMaXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsncGFnZXMvbGlzdC9zdHlsZS5jc3MnXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBMaXN0IHtcblxuICAgIHB1YmxpYyBUb0RvTGlzdCA9IFtdO1xuICAgIHB1YmxpYyBOZXdJdGVtID0gXCJcIjtcbiAgICBwdWJsaWMgVUlEO1xuICAgIHB1YmxpYyBGaXJlYmFzZVVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlKSB7IFxuICAgICAgICB0aGlzLnJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuVUlEID0gcGFyYW1zW1wiVUlEXCJdO1xuICAgICAgICAgICAgdGhpcy5GaXJlYmFzZVVybCA9IFwidXNlcnMvXCIrdGhpcy5VSUQ7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgQWRkSXRlbVRvTGlzdCgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLk5ld0l0ZW0pXG4gICAgICAgIGlmICh0aGlzLlRvRG9MaXN0LnNvbWUoeCA9PiB4ID09PSB0aGlzLk5ld0l0ZW0pKSB7XG4gICAgICAgICAgICBhbGVydChcInlvdXIgdG8gZG8gbGlzdCBhbHJlYWR5IGNvbnRhaW5zIHRoaXMgdGFrXCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5OZXdJdGVtID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIm5ldyB0YXNrIGNhbiBub3QgYmUgbnVsXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLlRvRG9MaXN0LnB1c2godGhpcy5OZXdJdGVtKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5GaXJlYmFzZVVybClcbiAgICAgICAgICAgIGZpcmViYXNlLnNldFZhbHVlKFxuICAgICAgICAgICAgICAgIHRoaXMuRmlyZWJhc2VVcmwsXG4gICAgICAgICAgICAgICAgeyB0YXNrOiB0aGlzLk5ld0l0ZW0gfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuTmV3SXRlbSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59Il19