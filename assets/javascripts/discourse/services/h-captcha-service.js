import Service from "@ember/service";
import { disableImplicitInjections } from "discourse/lib/implicit-injections";
import { tracked } from "@glimmer/tracking";
import EmberObject from "@ember/object";
import I18n from "I18n";

@disableImplicitInjections
export default class hCaptchaService extends Service {
  @tracked invalid = true;
  @tracked submitted = false;
  @tracked token = null;
  widgetId = null;
  hCaptcha = null;

  get submitFailed() {
    return this.submitted && this.invalid;
  }

  get inputValidation() {
    return EmberObject.create({
      failed: this.invalid,
      reason: I18n.t("discourse_hCaptcha.missing_token"),
    });
  }

  registerWidget(hCaptcha, id) {
    this.hCaptcha = hCaptcha;
    this.widgetId = id;
  }

  reset() {
    this.invalid = true;
    this.submitted = false;
    this.token = null;
    this.hCaptcha.reset(this.widgetId);
  }
}
