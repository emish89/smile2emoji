workflow "build and test" {
  on = "push"
  resolves = ["test", "coverage", "lint"]
}

action "build" {
  uses = "actions/npm@master"
  args = "ci"
}

action "test" {
  needs = "build"
  uses = "actions/npm@master"
  args = "t"
}

action "coverage" {
  needs = "build"
  uses = "actions/npm@master"
  args = "run coverage"
}

action "lint" {
  needs = "build"
  uses = "actions/npm@master"
  args = "run lint"
}