import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class app {
    public express: express.Application
    constructor () {
      this.express = express()
    }
}
