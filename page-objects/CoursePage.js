/*
FileName: CoursePage.js
ClassName: CoursePage
Description: Class for CoursePage
Author: arthiyadevi
*/

const  { courseNames }  = require('../constants/environmentDetails');

class CoursePage {
    constructor(page) {
        this.courseList     = page.locator('.course-card'); 
        this.cartBtn        = page.locator('.cartBtn');
    }   

    getCourseCard() {
        // Return single course detail
        return this.courseList.nth(0);
    }

    async addCoursesToCart() {
        const count = await this.courseList.count();
        // Add 3 courses
        for(let course_index=0;course_index< courseNames.length; course_index++)
        {
        for(let tile_index=0;tile_index<count;++tile_index)
            {
                if(await this.courseList.nth(tile_index).locator('h2').textContent() === courseNames[course_index])
                {
                    // add to cart
                    await this.courseList.nth(tile_index).locator('text=Add to Cart').click();
                    break;
                }
            }
        }

        this.cartBtn.click();
    }

}

module.exports = CoursePage;