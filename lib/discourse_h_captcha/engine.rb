# frozen_string_literal: true

module ::DiscourseHCaptcha
  class Engine < ::Rails::Engine
    engine_name PLUGIN_NAME
    isolate_namespace DiscourseHCaptcha
    config.autoload_paths << File.join(config.root, "lib")
  end
end
