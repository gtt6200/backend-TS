import express from "express";
import { createContainer, asClass } from "awilix";
import { TestService } from "./services/test.service";
import { scopePerRequest } from "awilix-express";
import { SubscriptionMySqlRepository } from "./services/repositories/implementation/mysql/subscription.repository";

export default (app: express.Application) => {

    const container = createContainer({
        injectionMode: "CLASSIC"
    });

    container.register({
        //Repositories
        subscriptionRepository: asClass(SubscriptionMySqlRepository).scoped(),

        //Services
        testService: asClass(TestService).scoped()
    });

    app.use(scopePerRequest(container));
};