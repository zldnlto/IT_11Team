//키가 150이 넘으면 YES, 틀리면 NO

//1
function heightLimit(h) {
  return h >= 150 ? "YES" : "NO";
}

//2
function heightLimit(h) {
  if (h >= 150) {
    return "YES";
  } else {
    return "NO";
  }
}
