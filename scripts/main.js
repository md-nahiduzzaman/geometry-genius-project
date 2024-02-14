// triangle

function calculateTriangleArea() {
  const triangleBase = getInputValue("triangle-base");

  const triangleHeight = getInputValue("triangle-height");

  const area = 0.5 * triangleBase * triangleHeight;
  setInnerText("triangle-area", area);
}

// rectangle

function calculateRectangleArea() {
  const rectangleWidth = getInputValue("rectangle-width");

  const rectangleLength = getInputValue("rectangle-length");

  const area = rectangleWidth * rectangleLength;
  setInnerText("rectangle-area", area);
}

// parallelogram

// rhombus

// pentagon

// ellipse

function getInputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueText = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueText);
  return inputFieldValue;
}

function setInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
