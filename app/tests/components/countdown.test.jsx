var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var CountDown  =  require('CountDown');

describe("Countdown", () => {
  it("should exist", () => {
    expect(CountDown).toExist();
  });

  describe('handleSetCountdown', () => {
    it("Should set state to started and countdown", (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown />);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done(); // this is used to run asynchronous tests, this tells Mocha that the test is done. Without it, Mocha will not support Asynchronous testing
      }, 1001)
    });
  });
  describe("startTimer", () => {
    it("Should prevent count from going negative", () => {
      var countdown  = TestUtils.renderIntoDocument(<CountDown />);
      countdown.handleSetCountdown(3);
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },4000)
    });
  });
});
