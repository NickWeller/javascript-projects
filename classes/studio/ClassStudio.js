//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    return this.scores.push(newScore);
  }
  average() {
    let sum = 0;
    let averageScore = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    averageScore = Math.round((sum / this.scores.length) * 10) / 10;
    return averageScore;
  }
  passStatus() {
    let averageScore = this.average();
    if (averageScore >= 90) {
      return "Accepted";
    } else if (averageScore>= 80) {
      return "Reserve";
    } else if (averageScore>= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }
  result() {
    return `${this.name} has a test average of ${this.average()}% and a status of ${this.passStatus()}`;
  }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let sum = 0
while (gladGator.average() < 90) {
    gladGator.addScore(100);
    sum += 1
}

console.log(sum)
