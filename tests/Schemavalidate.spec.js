import{test,expect} from '@playwright/test';
import Ajv from 'ajv';
import schema from './schema/userSchema.json' assert { type: 'json' };