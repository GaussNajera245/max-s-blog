<template>
  <v-container>
    <br>
    <v-layout>
      <v-flex x12>
        <v-layout>
          <v-flex offset-xs5 >
        <h2 style="font-size:2em" >SIGN UP: </h2>
          </v-flex>
        </v-layout>
        <v-card>
          <v-card-text>
            <v-container>
              <form>
                <v-layout row>
                  <v-flex xs12 >
                    <v-text-field
                      type="email"
                      name="email"
                      v-model="email"
                      id="email"
                      label="Mail"
                      required
                    >
                    
                    </v-text-field>


                    <v-text-field
                      type="password"
                      name="password"
                      v-model="password"
                      id="password"
                      label="Password"
                      required
                    >

                    </v-text-field>
                    
                    <v-text-field
                      type="password"
                      name="confirmPassword"
                      v-model="confirmPassword"
                      id="confirmPassword"
                      label="Confirm Password"
                      required
                    >

                    </v-text-field>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>