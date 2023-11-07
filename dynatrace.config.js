module.exports = {
    react : {
        debug : true,

        lifecycle : {
            /**
             * Decide if you want to see Update Cycles as well
             */
            includeUpdate: false,

            /**
             * Filter for Instrumenting Lifecycle of Components / True = Will be instrumented
             */
            instrument: (filename) => {
                return false;
            }
        },

        input : {
            /**
             * Allows you to filter the instrumentation for touch events, refresh events and picker events in certain files
             * True = Will be instrumented
             */
            instrument: (filename) => {
                return true;
            }
        }
    },
    android : {
        // Those configs are copied 1:1
        config : `
        dynatrace {
            configurations {
                defaultConfig {
                    autoStart {
                        applicationId '595b2c0c-3109-4610-b1c5-b4368bea9de2'
                        beaconUrl 'https://bf64693eaq.bf.dynatrace.com/mbeacon'
                    }
                    userOptIn true
                    debug.agentLogging true
                }
            }
        }
        `
    },
    ios : {
        // Those configs are copied 1:1
        config : `
        <key>DTXApplicationID</key>
        <string>595b2c0c-3109-4610-b1c5-b4368bea9de2</string>
        <key>DTXBeaconURL</key>
        <string>https://bf64693eaq.bf.dynatrace.com/mbeacon</string>
        <key>DTXLogLevel</key>
        <string>ALL</string>
        <key>DTXUserOptIn</key>
        <true/>
        `
    }
}
