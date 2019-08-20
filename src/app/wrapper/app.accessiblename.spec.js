describe('Accessible Name Automation Proof of Concept', () => {
  beforeAll(async () => await page.goto('http://localhost:8080'))

  describe('Semantic components', () => {
    describe('Buttons', () => {
      describe('Basic', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#basicButtonSemantic[data-case="text"'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Visible label"', async () => await expect(name).toBe('Visible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#basicButtonSemantic[data-case="emoji"'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "🔓"', async () => await expect(name).toBe('🔓'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })
      })

      describe('Labelled', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#labelledButtonSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#labelledButtonSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })
      })

      describe('Inlined', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#inlinedButtonSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#inlinedButtonSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })
      })
    })

    describe('Links', () => {
      describe('Basic', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#basicLinkSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Visible label"', async () => await expect(name).toBe('Visible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#basicLinkSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "🔓"', async () => await expect(name).toBe('🔓'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })
      })

      describe('Labelled', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#labelledLinkSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#labelledLinkSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })
      })

      describe('Inlined', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#inlinedLinkSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#inlinedLinkSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })
      })
    })
    
    describe('Titles', () => {
      describe('Level 1', () => {
        let name, role, level

        beforeAll (async () => {
          try {
            ({ name, role, level } = await page.evaluate(() => {
              return getComputedAccessibleNode(document.querySelector('#firstLevelTitleSemantic'))
                .then(data => {
                  let object = {}
                  for (key in data) object[key] = data[key]
                  return object
              })
            }))
          } catch (err) {
            console.log(err)
          }
        })

        it('should have its accessible name equal to "Visible title"', async () => await expect(name).toBe('Visible title'))
        it('should have its accessible role equal to "heading"', async () => await expect(role).toBe('heading'))
        it('should have its accessible level equal to "1"', async () => await expect(level).toBe(1))
      })

      describe('Level 2', () => {
        let name, role, level

        beforeAll (async () => {
          try {
            ({ name, role, level } = await page.evaluate(() => {
              return getComputedAccessibleNode(document.querySelector('#secondLevelTitleSemantic'))
                .then(data => {
                  let object = {}
                  for (key in data) object[key] = data[key]
                  return object
              })
            }))
          } catch (err) {
            console.log(err)
          }
        })

        it('should have its accessible name equal to "Visible title"', async () => await expect(name).toBe('Visible title'))
        it('should have its accessible role equal to "heading"', async () => await expect(role).toBe('heading'))
        it('should have its accessible level equal to "2"', async () => await expect(level).toBe(2))
      })

      describe('Level 3', () => {
        let name, role, level

        beforeAll (async () => {
          try {
            ({ name, role, level } = await page.evaluate(() => {
              return getComputedAccessibleNode(document.querySelector('#thirdLevelTitleSemantic'))
                .then(data => {
                  let object = {}
                  for (key in data) object[key] = data[key]
                  return object
              })
            }))
          } catch (err) {
            console.log(err)
          }
        })

        it('should have its accessible name equal to "Visible title"', async () => await expect(name).toBe('Visible title'))
        it('should have its accessible role equal to "heading"', async () => await expect(role).toBe('heading'))
        it('should have its accessible level equal to "3"', async () => await expect(level).toBe(3))
      })

      describe('Level 4', () => {
        let name, role, level

        beforeAll (async () => {
          try {
            ({ name, role, level } = await page.evaluate(() => {
              return getComputedAccessibleNode(document.querySelector('#fourthLevelTitleSemantic'))
                .then(data => {
                  let object = {}
                  for (key in data) object[key] = data[key]
                  return object
              })
            }))
          } catch (err) {
            console.log(err)
          }
        })

        it('should have its accessible name equal to "Visible title"', async () => await expect(name).toBe('Visible title'))
        it('should have its accessible role equal to "heading"', async () => await expect(role).toBe('heading'))
        it('should have its accessible level equal to "4"', async () => await expect(level).toBe(4))
      })
    })
  })

  describe('Non semantic components', () => {
    describe('Buttons', () => {
      describe('Basic', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#basicButtonNonSemantic[data-case="text"'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Visible label"', async () => await expect(name).toBe('Visible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#basicButtonNonSemantic[data-case="emoji"'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "🔓"', async () => await expect(name).toBe('🔓'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })
      })

      describe('Labelled', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#labelledButtonNonSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#labelledButtonNonSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })
      })

      describe('Inlined', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#inlinedButtonNonSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#inlinedButtonNonSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "button"', async () => await expect(role).toBe('button'))
        })
      })
    })

    describe('Links', () => {
      describe('Basic', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#basicLinkNonSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Visible label"', async () => await expect(name).toBe('Visible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#basicLinkNonSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "🔓"', async () => await expect(name).toBe('🔓'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })
      })

      describe('Labelled', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#labelledLinkNonSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#labelledLinkNonSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })
      })

      describe('Inlined', () => {
        describe('Text', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#inlinedLinkNonSemantic[data-case="text"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })

        describe('Emoji', () => {
          let name, role

          beforeAll (async () => {
            try {
              ({ name, role } = await page.evaluate(() => {
                return getComputedAccessibleNode(document.querySelector('#inlinedLinkNonSemantic[data-case="emoji"]'))
                  .then(data => {
                    let object = {}
                    for (key in data) object[key] = data[key]
                    return object
                })
              }))
            } catch (err) {
              console.log(err)
            }
          })

          it('should have its accessible name equal to "Accessible label"', async () => await expect(name).toBe('Accessible label'))
          it('should have its accessible role equal to "link"', async () => await expect(role).toBe('link'))
        })
      })
    })

    describe('Titles', () => {
      describe('Level 1', () => {
        let name, role, level

        beforeAll (async () => {
          try {
            ({ name, role, level } = await page.evaluate(() => {
              return getComputedAccessibleNode(document.querySelector('#firstLevelTitleNonSemantic'))
                .then(data => {
                  let object = {}
                  for (key in data) object[key] = data[key]
                  return object
              })
            }))
          } catch (err) {
            console.log(err)
          }
        })

        it('should have its accessible name equal to "Visible title"', async () => await expect(name).toBe('Visible title'))
        it('should have its accessible role equal to "heading"', async () => await expect(role).toBe('heading'))
        it('should have its accessible level equal to "1"', async () => await expect(level).toBe(1))
      })

      describe('Level 2', () => {
        let name, role, level

        beforeAll (async () => {
          try {
            ({ name, role, level } = await page.evaluate(() => {
              return getComputedAccessibleNode(document.querySelector('#secondLevelTitleNonSemantic'))
                .then(data => {
                  let object = {}
                  for (key in data) object[key] = data[key]
                  return object
              })
            }))
          } catch (err) {
            console.log(err)
          }
        })

        it('should have its accessible name equal to "Visible title"', async () => await expect(name).toBe('Visible title'))
        it('should have its accessible role equal to "heading"', async () => await expect(role).toBe('heading'))
        it('should have its accessible level equal to "2"', async () => await expect(level).toBe(2))
      })

      describe('Level 3', () => {
        let name, role, level

        beforeAll (async () => {
          try {
            ({ name, role, level } = await page.evaluate(() => {
              return getComputedAccessibleNode(document.querySelector('#thirdLevelTitleNonSemantic'))
                .then(data => {
                  let object = {}
                  for (key in data) object[key] = data[key]
                  return object
              })
            }))
          } catch (err) {
            console.log(err)
          }
        })

        it('should have its accessible name equal to "Visible title"', async () => await expect(name).toBe('Visible title'))
        it('should have its accessible role equal to "heading"', async () => await expect(role).toBe('heading'))
        it('should have its accessible level equal to "3"', async () => await expect(level).toBe(3))
      })

      describe('Level 4', () => {
        let name, role, level

        beforeAll (async () => {
          try {
            ({ name, role, level } = await page.evaluate(() => {
              return getComputedAccessibleNode(document.querySelector('#fourthLevelTitleNonSemantic'))
                .then(data => {
                  let object = {}
                  for (key in data) object[key] = data[key]
                  return object
              })
            }))
          } catch (err) {
            console.log(err)
          }
        })

        it('should have its accessible name equal to "Visible title"', async () => await expect(name).toBe('Visible title'))
        it('should have its accessible role equal to "heading"', async () => await expect(role).toBe('heading'))
        it('should have its accessible level equal to "4"', async () => await expect(level).toBe(4))
      })
    })
  })
})
